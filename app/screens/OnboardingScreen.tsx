import { View, Text, ScrollView } from "react-native";
import React from "react";
import BackgroundImage from "../components/ui/BackgroundImage";
import Container from "../components/ui/Container";
import Logo from "../components/Logo";

const OnboardingScreen = ({children}: any) => {
  
  return (
    <BackgroundImage className="">
      <View className="flex-1 justify-center">
      <View className="absolute top-12 left-5 right-0 items-center flex-row">
        <Logo className="w-10 h-10 rounded-xl" />
        <Text className="text-[28px] font-medium text-dark-white font-Pacifico ml-2">
          Bed time Story
        </Text>
      </View>

      <Container className="">
       {children}
      </Container>
      </View>
    </BackgroundImage>
  );
};

export default OnboardingScreen;
