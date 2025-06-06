import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Login from "./login"
import Welcome from '../components/ui/Welcome'
import OnboardingScreen from '../screens/OnboardingScreen'
import SplashScreen from '../screens/SplashScreen'

const index = () => {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <SplashScreen onFinish={() => setIsLoading(false)} />
  }

  return (
  <OnboardingScreen>
     <Welcome />
  </OnboardingScreen>
  )
}

export default index