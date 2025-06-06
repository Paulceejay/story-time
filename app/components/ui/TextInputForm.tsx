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
    <View className="py-2">
      <Text className="text-dark-white font-Montserrat font-bold py-1">
        {textInputTitle}
      </Text>
      <TextInput
        className={`${className} w-full h-16 px-4 justify-center items-center placeholder-dark-white bg-dark-formBg text-dark-white font-light`}
        placeholder={textInputTitle}
        placeholderTextColor="#FFFFFF0A"
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
};

export default TextInputForm;
