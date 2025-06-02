import { View, Text, TextInput } from 'react-native'
import React from 'react'

type inputProps = {
    textInputTitle: string
}

const TextInputForm = ({textInputTitle}: inputProps) => {
  return (
    <View className="py-2">
          <Text className="text-dark-white font-Montserrat font-medium py-1">
            {textInputTitle}
          </Text>
          <TextInput
            className="w-full h-16 px-4 justify-center items-center placeholder-dark-white bg-dark-formBtn opacity-[0.5] text-dark-white font-light"
            placeholder={textInputTitle}
            placeholderTextColor="#FFFFFF"
          />
        </View>
  )
}

export default TextInputForm