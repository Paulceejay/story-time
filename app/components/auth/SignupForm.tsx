import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import TextInputForm from "../ui/TextInputForm";
import SignInWithGoogle from "../ui/SignInWithGoogle";
import { supabase } from "@/app/lib/supabase-client";
import { useRouter } from "expo-router";

const SignupForm = () => {
  const router = useRouter();

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const SubmitHandler = async () => {
    const { data: userData, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullname,
          avatar_url: ''
        },
      },
    });

    if (signUpError) {
      setErrorMessage(signUpError.message); // Show Supabase error

      setTimeout(() => {
        setErrorMessage("");
      }, 4000);
      return;
    }

    router.replace("/(tabs)");
  };

  return (
    <View className="">
      <Text className="text-dark-white text-[26px] font-semibold font-MontserratAlt">
        Create Account
      </Text>

      <View>
        {/* text input for full name */}
        <TextInputForm
          value={fullname}
          onChangeText={setFullname}
          textInputTitle="Enter Full Name"
        />

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

        {/* Text input for Password confirmation */}
        <TextInputForm
          textInputTitle="Re-enter Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        <View
          className={`${
            password !== confirmPassword ? "bg-red-500" : ""
          } bg-dark-primary w-ful h-16 rounded-full my-2`}
        >
          <TouchableOpacity
            onPress={SubmitHandler}
            className="flex-1 justify-center items-center"
          >
            <Text className="text-dark-white font-MontserratAlt font-normal text-xl">
              Proceed{" "}
            </Text>
          </TouchableOpacity>
        </View>

        {/* if sif password do nat match */}
        {password !== confirmPassword && (
          <Text className="text-xs text-red-500 font-medium text-center">
            Your passwords do not match
          </Text>
        )}

        {/* diplay error Message */}
        {errorMessage !== "" && (
          <Text className="text-xs text-red-500 font-medium text-center mt-2">
            {errorMessage}
          </Text>
        )}

        {/* already have an account section */}
        <View className="flex-row py-3">
          <Text className="text-dark-white text-14 font-MontserratAlt font-light">
            Already have an account?
          </Text>
          <TouchableOpacity onPress={() => router.push("/_auth/login")}>
            <Text className="pl-2 text-dark-primary text-14 font-MontserratAlt font-light">
              Login
            </Text>
          </TouchableOpacity>
        </View>

        {/* sign up with Google option */}
        <SignInWithGoogle />
      </View>
    </View>
  );
};

export default SignupForm;
