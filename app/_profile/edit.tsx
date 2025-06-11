import { View, Text, TouchableOpacity, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import TextInputForm from "../components/ui/TextInputForm";
import { supabase } from "@/app/lib/supabase-client";
import { useRouter } from "expo-router";

const profileEdit = () => {
 const router = useRouter()

  const [user, setUser] = useState<any>(null);
  // Form states
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullname, setFullname] = useState('');
  // Error state
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data: { user }, error } = await supabase.auth.getUser();
        
        if (error || !user) {
          setErrorMessage("Please login to view profile")
          return;
        }
        
        setUser(user);

        const { data, error: profileError } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single();
        
        setFullname(data?.full_name || '');

      } catch (error) {
        Alert.alert("Error", "Failed to load profile");
        setErrorMessage("Failed to load profile")
      }
    };

    fetchProfile();
  }, []);

  const validateName = () => {
    if (fullname.trim().length < 3) {
      setErrorMessage('Please enter a valid name');
      return false;
    }
    setErrorMessage('');
    return true;
  };

  const validatePassword = () => {
    if (confirmPassword.length < 6) {
      setErrorMessage('Password must be at least 6 characters');
      return false;
    }
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return false;
    } else if (!password){
      setErrorMessage("Enter a Valid Password")
    }
    setErrorMessage('');
    return true;
  };

  const verifyCurrentPassword = async () => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: user.email,
        password: password,
      });

      if (error) {
        throw new Error("Current password is incorrect");
      }
      return true;
    } catch (error: any) {
      setErrorMessage(error.message);
      return false;
    } 
  }

  const handleUpdateProfile = async () => {
    if (!validateName()) return;
    if (!validatePassword()) return

    try {
       // First verify current password
       const isVerified = await verifyCurrentPassword();
       if (!isVerified) return;
    } catch (error: any) {
      setErrorMessage(error.message)
    }

    try {
      const { error } = await supabase
        .from('profiles')
        .upsert({
          id: user.id,
          full_name: fullname.trim(),
          updated_at: new Date().toISOString()
        });

       
      if (error) throw error
     
      router.push("/profile")
    } catch (error: any) {
     setErrorMessage(error.message)
    }
    
  };
  
  setTimeout(() => {
    setErrorMessage("");
  }, 4000);

  return (
    <View className="py-8 px-6 flex justify-center">
         {/* diplay error Message */}
         {errorMessage !== "" && (
          <Text className="text-xs text-red-500 font-medium text-center mt-2">
            {errorMessage}
          </Text>
        )}

      <Text className="text-lg text-dark-white font-semibold font-MontserratAlt text-center my-8">
        Update settings
      </Text>

      <TextInputForm
        value={fullname}
        onChangeText={setFullname}
        textInputTitle="Enter full name"
      />
      
      <TextInputForm
        value={password}
        onChangeText={setPassword}
        textInputTitle="Password"
      />
      <TextInputForm
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        textInputTitle="Re-enter Password"
      />

      <TouchableOpacity onPress={handleUpdateProfile} className="bg-dark-primary py-3 px-6 rounded-full">
        <Text className="text-white text-center font-semibold">
          Save Changes
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default profileEdit;
