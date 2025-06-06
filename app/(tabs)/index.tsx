import "../../global.css";
import React, { useState } from 'react';
import { Text, View } from "react-native";
import SplashScreen from "../screens/SplashScreen";
import SignupForm from "../components/auth/SignupForm";
import { SafeAreaView } from "react-native";
import OnboardingScreen from "../screens/OnboardingScreen";
import HomeScreen from "../screens/HomeScreen";

export default function Index() {

  return (
    <HomeScreen />
  );
}
