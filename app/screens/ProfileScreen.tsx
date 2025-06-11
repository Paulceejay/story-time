import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import { supabase } from "../lib/supabase";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import { decode } from "base64-arraybuffer";
import LogoutComponent from "../components/ui/LogoutComponent";
import SavedStories from "../components/ui/SavedStories";
import UpdateSettings from "../components/ui/UpdateSettings";
import LoadingComponent from "../components/ui/LoadingComponent";

const ProfileScreen = () => {
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<any>(null);
  const [uploading, setUploading] = useState(false);
  const [loading, setLaoading] = useState(true)

  // Fetch user profile
  useEffect(() => {
    setLaoading(true)
    const fetchProfile = async () => {
      try {
        const {
          data: { user },
          error,
        } = await supabase.auth.getUser();

        if (error || !user) {
          Alert.alert("Error", "Please login to view profile");
          return;
        }

        setUser(user);

        const { data, error: profileError } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", user.id)
          .single();

        if (profileError) {
          console.error("Profile fetch error:", profileError);
          setProfile({
            id: user.id,
            avatar_url: null,
            email: user.email,
          });
        } else {
          setProfile(
            data || {
              id: user.id,
              avatar_url: null,
              email: user.email,
            }
          );
        }
      } catch (error) {
        Alert.alert("Error", "Failed to load profile");
      }finally {
        setLaoading(false)
      }
    };

    fetchProfile();
  }, []);

  // Handle avatar upload
  const handleAvatarUpload = async () => {
    try {
      // Request permissions
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "Permission required",
          "Please allow access to your photos to upload an avatar"
        );
        return;
      }

      // Launch image picker
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.9,
      });

      if (result.canceled || !result.assets?.[0]) {
        return;
      }

      setUploading(true);
      const file = result.assets[0];

      // Generate unique filename
      const fileExt = file.uri.split(".").pop()?.toLowerCase() || "jpg";
      const fileName = `${user.id}-${Date.now()}.${fileExt}`;
      const filePath = `avatars/${fileName}`;

      // Read and convert file
      const base64 = await FileSystem.readAsStringAsync(file.uri, {
        encoding: FileSystem.EncodingType.Base64,
      });

      // Upload to Supabase Storage
      const { error: uploadError } = await supabase.storage
        .from("avatars")
        .upload(filePath, decode(base64), {
          contentType: `image/${fileExt}`,
          upsert: true,
          cacheControl: "3600",
        });

      if (uploadError) {
        console.error("Upload error:", uploadError);
        throw uploadError;
      }

      // Get public URL
      const {
        data: { publicUrl },
      } = supabase.storage.from("avatars").getPublicUrl(filePath);

      // Update profile
      const { error: updateError } = await supabase.from("profiles").upsert({
        id: user.id,
        avatar_url: publicUrl,
        updated_at: new Date().toISOString(),
      });

      if (updateError) {
        console.error("Update error:", updateError);
        throw updateError;
      }

      // Update local state
      setProfile((prev: any) => ({
        ...prev,
        avatar_url: publicUrl,
      }));

      Alert.alert("Success", "Avatar updated successfully!");
    } catch (error: any) {
      Alert.alert(
        "Upload failed",
        error.message || "Failed to upload avatar. Please try again."
      );
    } finally {
      setUploading(false);
    }
  };

  if(loading){
    return  <LoadingComponent />
  }
  
  return (
    <View className="py-8">
      {/* header section */}
      <View className="mt-5 flex-row justify-center">
        <Text className="text-dark-white text-2xl font-Pacifico font-normal mr-px">
          Profile{" "}
        </Text>
        <Text className="text-dark-primary text-2xl font-Pacifico font-normal ml-px">
          Setting
        </Text>
      </View>

      {/* displaying the image */}
      <View className="flex justify-center items-center my-5">
        <TouchableOpacity onPress={handleAvatarUpload} className="">
          {uploading ? (
            <View className="w-32 h-32 rounded-full border-4 border-[#CACACA] bg-[#7B7B7B] flex items-center justify-center">
              <ActivityIndicator
                className="flex justify-center items-center"
                size="small"
                color="#E28600"
              />
            </View>
          ) : (
            <Image
              width={35}
              height={35}
              source={{
                uri: profile?.avatar_url
                  ? `${profile.avatar_url}?t=${Date.now()}`
                  : `https://ui-avatars.com/api/?name=${encodeURIComponent(
                      user?.email?.split("@")[0] || "U"
                    )}&background=random&color=fff`,
              }}
              className="w-32 h-32 rounded-full border-4 border-[#CACACA] bg-[#7B7B7B]"
            />
          )}
        </TouchableOpacity>
      </View>

      {/* // to display user name and email */}
      <View className="">
        <Text className="text-xl text-dark-white text-center font-semibold font-MontserratAlt">
          {profile?.full_name}
        </Text>
        <Text className="text-sm text-[#9F9F9F] text-center font-normal font-MontserratAlt">
          {profile?.email}
        </Text>
      </View>

      {/* long line that divide the avatar section and settings */}
      <View className="border border-[#202020] w-full my-10"></View>

      {/* settings and save items and Log-out */}
      <View className="px-6">
        <SavedStories />

        <UpdateSettings />

        <LogoutComponent />
      </View>
    </View>
  );
};

export default ProfileScreen;
