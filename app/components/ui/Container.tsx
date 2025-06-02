import { View, Text } from 'react-native'
import React, { JSX } from "react";

type Props = {
    children: string | JSX.Element,
    className: string
  }

const Container = ({ children, className }: Props) => {
  return (
    <View className={`px-6 ${className}`}>
      {children}
    </View>
  )
}

export default Container