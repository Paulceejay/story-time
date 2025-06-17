import * as WebBrowser from 'expo-web-browser';
import * as AuthSession from 'expo-auth-session';
import { supabase } from '../lib/supabase'; 
import * as Google from 'expo-auth-session/providers/google';
import { useEffect } from 'react';
import { makeRedirectUri } from 'expo-auth-session';
import { Alert } from 'react-native';

WebBrowser.maybeCompleteAuthSession();

const redirectUri = "https://auth.expo.io/paulceejay/story-time"

const clientId = '533805357729-hqvg9qj8if91pabnsggqlfrmeld147th.apps.googleusercontent.com';

export function useGoogleSignIn() {
  const redirectUri = makeRedirectUri({
    useProxy: true,
  } as any );
  
  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: clientId,
    redirectUri,
    scopes: ["openid", "email", "profile"],
  });

  useEffect(() => {
    console.log("Google Auth Response:", response);
  
    const signInWithGoogle = async () => {
      if (response?.type === 'success') {
        const { authentication } = response;
  
        const { data, error } = await supabase.auth.signInWithIdToken({
          provider: 'google',
          token: authentication?.idToken || '',
        });
  
        if (error) {
          Alert.alert('Supabase Sign-In Failed', error.message);
        }
      } else if (response?.type === 'error') {
        Alert.alert('Google Login Failed', response.error?.message || 'Unknown error');
      }
    };
  
    signInWithGoogle();
  }, [response]);

  return {
    promptAsync,
    request,
}};