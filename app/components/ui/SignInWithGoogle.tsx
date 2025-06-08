import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { supabase } from "@/app/lib/supabase-client";

const googleLogo = require("../../../assets/images/google-logo.webp")
import { useRouter } from "expo-router";

const SignInHandler = async () => {
  const router = useRouter();
  const { data: { user } } = await supabase.auth.getUser()


const googleAvatar = user?.user_metadata?.avatar_url || user?.user_metadata?.picture
const fullName = user?.user_metadata?.full_name
const email = user?.email


// await supabase.from('users').upsert({
//   id: user.id,
//   email,
//   full_name: fullName,
//   avatar_url: googleAvatar,
// })

  router.replace("/(tabs)");
};

const SignInWithGoogle = () => {
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