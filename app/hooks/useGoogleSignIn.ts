// hooks/useGoogleAuth.ts
import * as Google from "expo-auth-session/providers/google";
import { useEffect } from "react";
import { supabase } from "../lib/supabase";
import { makeRedirectUri } from "expo-auth-session";
import { Alert } from "react-native";

export function useGoogleSignIn() {

  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: "533805357729-hqvg9qj8if91pabnsggqlfrmeld147th.apps.googleusercontent.com",
    redirectUri: "https://auth.expo.io/@paulceejay/story-time",
    scopes: ["openid", "email", "profile"],
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
      if (authentication?.accessToken) {
        signInWithSupabase(authentication.accessToken);
      }
    }
  }, [response]);

  const signInWithSupabase = async (accessToken: string) => {
    const { data, error } = await supabase.auth.signInWithIdToken({
      provider: "google",
      token: accessToken,
    });

    if (error) {
      console.error("Supabase sign-in error:", error.message);
      Alert.alert("Error", "Supabase login failed");
    }
  };

  return {
    promptAsync,
    request,
  };
}
