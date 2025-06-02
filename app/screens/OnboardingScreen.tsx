import { View, Text, ScrollView } from "react-native";
import React from "react";
import SignupForm from "../components/auth/SignupForm";
import BackgroundImage from "../components/ui/BackgroundImage";
import Container from "../components/ui/Container";
import LoginForm from "../components/auth/LoginForm";

const OnboardingScreen = () => {
  return (
    <BackgroundImage className="opacity-[0.7]">
      <Container className="">
        <LoginForm />
      </Container>
    </BackgroundImage>
  );
};

export default OnboardingScreen;
