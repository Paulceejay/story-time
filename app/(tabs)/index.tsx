import "../../global.css";
import { Text, View } from "react-native";
import SplashScreen from "../screens/SplashScreen";
import SignupForm from "../components/auth/SignupForm";
import { SafeAreaView } from "react-native";
import OnboardingScreen from "../screens/OnboardingScreen";

export default function Index() {
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
