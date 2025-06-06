import { View, Text, TextInput, Button } from 'react-native';
import { supabase } from '../lib/supabase';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import OnboardingScreen from '../screens/OnboardingScreen';
import LoginForm from '../components/auth/LoginForm';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (!error) {
      router.replace('/'); // go to tabs
    } else {
      alert(error.message);
    }
  };

  return (
   <OnboardingScreen>
    <LoginForm />
   </OnboardingScreen>
  );
}
