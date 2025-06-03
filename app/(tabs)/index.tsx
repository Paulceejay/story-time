import "../../global.css";
import React, { useState } from 'react';
import { Text, View } from "react-native";
import SplashScreen from "../screens/SplashScreen";
import SignupForm from "../components/auth/SignupForm";
import { SafeAreaView } from "react-native";
import OnboardingScreen from "../screens/OnboardingScreen";

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <SplashScreen onFinish={() => setIsLoading(false)} />;
  }

  return (
    <>
      <OnboardingScreen />
    </>
  );
}

// import * as SplashScreen from "expo-splash-screen";
// import { Text, View } from "react-native";
// // import SplashScreen from "../screens/SplashScreen";

// SplashScreen.preventAutoHideAsync();
// setTimeout(SplashScreen.hideAsync, 5000);
