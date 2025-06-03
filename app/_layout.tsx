import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {

  const [loaded] = useFonts({
    Pacifico: require('../assets/fonts/Pacifico-Regular.ttf'),
    Montserrat: require('../assets/fonts/Montserrat-VariableFont_wght.ttf'),
    MontserratAlt: require('../assets/fonts/MontserratAlternates-Bold.ttf'),
    Pompiere: require('../assets/fonts/Pompiere-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ThemeProvider value={DarkTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
