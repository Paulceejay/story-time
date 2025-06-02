import { View, Text } from 'react-native'
import React from 'react'

const Logo = ({className}: string) => {
  return (
    <View className={`bg-dark-primary ${className}`}>
   <View className='flex-1 justify-center items-center'>
   <Text className='text-3xl font-normal text-dark-white font-Pacifico'>B</Text>
   </View>
  </View>
  )
}

export default Logo