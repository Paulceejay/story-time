import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import TextInputForm from "../ui/TextInputForm";
import SignInWithGoogle from "../ui/SignInWithGoogle";
import { useRouter } from "expo-router";
import { supabase } from "@/app/lib/supabase";

const LoginForm = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("")

  const loginHandler = async () => {
    const { error: loginError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (!loginError) {
      router.replace("/(tabs)"); // go to tabs
    } else {
      setErrorMessage(loginError.message)

      setTimeout(() => {
        setErrorMessage("");
      }, 4000);
    }


    
  };

  return (
    <View className="">
      <Text className="text-dark-white text-[26px] font-semibold font-MontserratAlt mb-10">
        Login
      </Text>

      <View>
        {/* Text Input for Email */}
        <TextInputForm
          value={email}
          onChangeText={setEmail}
          textInputTitle="Enter Email"
        />

        {/* Text input for Password */}
        <TextInputForm
          value={password}
          onChangeText={setPassword}
          textInputTitle="Enter Password"
        />

        {/* Login */}
        <View className="bg-dark-primary w-ful h-16 rounded-full my-2">
          <TouchableOpacity onPress={loginHandler} className="flex-1 justify-center items-center">
            <Text className="text-dark-white font-MontserratAlt font-normal text-xl">
              Login
            </Text>
          </TouchableOpacity>
        </View>

         {/* diplay error Message */}
         {errorMessage !== "" && (
          <Text className="text-xs text-red-500 font-medium text-center mt-2">
            {errorMessage}
          </Text>
        )}

        {/* already have an account section */}
        <View className="flex-row py-3">
          <Text className="text-dark-white text-14 font-MontserratAlt font-light">
            Don't have an account?
          </Text>
          <TouchableOpacity onPress={() => router.push("/_auth/register")}>
            <Text className="pl-2 text-dark-primary text-14 font-MontserratAlt font-light">
              Create account?
            </Text>
          </TouchableOpacity>
        </View>

        {/* sign up with Google option */}
        <SignInWithGoogle />
      </View>
    </View>
  );
};

export default LoginForm;
