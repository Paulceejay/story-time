import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import { useUserStore } from "@/store/userStore";
import { supabase } from "../lib/supabase";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import Container from "../components/ui/Container";
import LogoutComponent from "../components/ui/LogoutComponent";

const ProfileScreen = (userId: string) => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);

  // fetch Load user + profile on profile screen
  useEffect(() => {
    const fetchProfile = async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();
      if (error || !user) {
        Alert.alert("Error", "User Not logged in.");
        return;
      }
      setUser(user);

      const { data, error: profileError } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();

      if (profileError) {
        Alert.alert("Error", "Could not load profile");
        console.error(profileError);
      } else {
        setProfile(data);
      }

      setLoading(false);
    };

    fetchProfile();
  }, []);

  console.log(user);

  // Upload avatar handler
  const handleAvatarUpload = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (result.canceled) return;

    setUploading(true);

    const file = result.assets[0];
    const fileExt = file.uri.split(".").pop();
    const fileName = `${user.id}.${fileExt}`;
    const filePath = `avatars/${fileName}`;

    // Construct signed URL for upload
    const { data: signedUrlData, error: signedUrlError } =
      await supabase.storage.from("avatars").createSignedUploadUrl(filePath);

    if (signedUrlError || !signedUrlData) {
      Alert.alert("Error", "Could not get signed upload URL.");
      setUploading(false);
      return;
    }

    // Upload file to signed URL
    const uploadResponse = await FileSystem.uploadAsync(
      signedUrlData.signedUrl,
      file.uri,
      {
        httpMethod: "PUT",
        uploadType: FileSystem.FileSystemUploadType.BINARY_CONTENT,
        headers: {
          "Content-Type": "image/jpeg",
        },
      }
    );

    if (uploadResponse.status !== 200) {
      Alert.alert("Upload failed", "Could not upload image.");
      console.error("Upload failed", uploadResponse);
      setUploading(false);
      return;
    }

    // Use public URL
    const publicUrl = supabase.storage.from("avatars").getPublicUrl(filePath)
      .data.publicUrl;

    const { error: updateError } = await supabase
      .from("profiles")
      .update({ avatar_url: publicUrl })
      .eq("id", user.id);

    if (updateError) {
      Alert.alert("Error updating profile", updateError.message);
    } else {
      setProfile((prev) => ({ ...prev, avatar_url: publicUrl }));
    }

    setUploading(false);
  };

  if (loading) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <Container className="my-8">
      <View>
        <View className="py-5 flex-row justify-center">
          <Text className="text-dark-white text-2xl font-Pacifico font-normal mr-px">
            Profile{" "}
          </Text>
          <Text className="text-dark-primary text-2xl font-Pacifico font-normal ml-px">
            {" "}
            Setting
          </Text>
        </View>

        <View className="flex-1 justify-center items-center py-4">
          <TouchableOpacity onPress={handleAvatarUpload} className="mb-4">
            {uploading ? (
              <ActivityIndicator
                className="flex justify-center items-center"
                size="small"
                color="blue"
              />
            ) : (
              <Image
                source={{
                  uri:
                    profile?.avatar_url ||
                    "https://placehold.co/120x120?text=Avatar",
                }}
                resizeMode="cover"
                className="w-32 h-32 rounded-full border-4 border-[#CACACA] bg-[#7B7B7B]          "
              />
            )}
          </TouchableOpacity>

          {/* <Text className="text-xl text-dark-white mt-4">{profile?.full_name}</Text>
      <Text className="text-xl text-dark-white">{profile?.email}</Text> */}
        </View>

        <LogoutComponent />
      </View>
    </Container>
  );
};

export default ProfileScreen;
