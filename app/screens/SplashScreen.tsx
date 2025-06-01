import { View, Text } from 'react-native'
import React from 'react'
import BackgroundImage from '../components/ui/BackgroundImage'
import { Colors } from '../constants/Colors'
import Logo from '../components/Logo'

const color = Colors

const SplashScreen = () => {
  return (
    <BackgroundImage bgOpacity="opacity-[0.5]">
      <View className='flex-1 justify-center items-center'>
       <Logo />
        <Text className='text-[28px] font-normal text-dark-white font-Pacifico'>Bed Time Story</Text>
      </View>
    </BackgroundImage>
  )
}

export default SplashScreen