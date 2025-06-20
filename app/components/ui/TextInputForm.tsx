import { View, Text, TextInput } from "react-native";
import React from "react";

type inputProps = {
  textInputTitle?: string;
  value?: string;
  onChangeText?: any;
  type?: string;
  className?: string;
};

const TextInputForm = ({
  textInputTitle,
  value,
  onChangeText,
  className,
}: inputProps) => {
  return (
    <View className="my-2">
      <Text className="text-dark-white text-base font-Montserrat font-bold py-1">
        {textInputTitle}
      </Text>
      <TextInput
        className={`${className} rounded-md w-full h-16 px-5 py-4 my-2 justify-center items-center bg-white/5 text-dark-white font-light`}
        placeholder={textInputTitle}
        placeholderTextColor="#9C9C9C"
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
};

export default TextInputForm;
