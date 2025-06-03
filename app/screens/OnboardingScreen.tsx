import { View, Text, ScrollView } from "react-native";
import React, { useState} from "react", "react";
import SignupForm from "../components/auth/SignupForm";
import BackgroundImage from "../components/ui/BackgroundImage";
import Container from "../components/ui/Container";
import LoginForm from "../components/auth/LoginForm";
import Logo from "../components/Logo";
import Welcome from "../components/ui/Welcome";

const OnboardingScreen = () => {
 
  
  return (
    <BackgroundImage className="opacity-[0.7]">
      <View className="flex-1 justify-center">
      <View className="absolute top-12 left-5 right-0 items-center flex-row">
        <Logo className="w-10 h-10 rounded-xl" />
        <Text className="text-[28px] font-medium text-dark-white font-Pacifico ml-2">
          Bed time Story
        </Text>
      </View>

      <Container className="absolute bottom-10 left-0 right-0">
        <Welcome />
      </Container>
      </View>
    </BackgroundImage>
  );
};

export default OnboardingScreen;
