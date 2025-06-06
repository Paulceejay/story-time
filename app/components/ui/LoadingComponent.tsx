import { View, ActivityIndicator, Text } from 'react-native'
import React from 'react'

const LoadingComponent = () => {
  return (
    <View className='flex-1 justify-center items-center'>
    <ActivityIndicator size="large" />
    <Text>Loading...</Text>
  </View>
  )
}

export default LoadingComponent