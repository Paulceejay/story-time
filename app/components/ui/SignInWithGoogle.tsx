import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { supabase } from "@/app/lib/supabase-client";
import { useRouter } from "expo-router";
import { useGoogleSignIn } from '@/app/hooks/useGoogleSignIn';

const googleLogo = require("../../../assets/images/google-logo.webp")

const SignInWithGoogle = () => {
 const {promptAsync, request} = useGoogleSignIn()
  return (
    <View className="bg-dark-formBtn w-full h-20 rounded-full my-5">
    <TouchableOpacity className="flex-1 justify-center items-center">
      <View className="flex-row items-center justify-center space-x-3">
        
        <Text className="text-dark-white font-MontserratAlt font-normal text-xl">
          Sign In with Google
        </Text>
        <Image
          source={googleLogo}
          className="w-12 h-12"
          resizeMode="contain"
        />
      </View>
    </TouchableOpacity>
  </View>
  )
}

export default SignInWithGoogle