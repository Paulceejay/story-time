import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack, Slot, Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useSupabaseAuth } from "./lib/useSupabaseAuth";
import SplashScreen from "./screens/SplashScreen";

export default function RootLayout() {
  const { loading, isAuthenticated } = useSupabaseAuth();

  const [loaded] = useFonts({
    Pacifico: require("../assets/fonts/Pacifico-Regular.ttf"),
    Montserrat: require("../assets/fonts/Montserrat-VariableFont_wght.ttf"),
    MontserratAlt: require("../assets/fonts/MontserratAlternates-Bold.ttf"),
    Pompiere: require("../assets/fonts/Pompiere-Regular.ttf"),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ThemeProvider value={DarkTheme}>
      <Stack>
        {/* Tabs shown only when user is authenticated */}
        {isAuthenticated && (
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        )}

        {/* Auth routes handled normally (e.g., _auth/login) */}
        {!isAuthenticated && (
          <Stack.Screen
            name="_auth"
            options={{
              headerShown: false,
              presentation: "card",
            }}
          />
        )}

        {/* Catch-all 404 route */}
        <Stack.Screen name="+not-found" />
      </Stack>

      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
