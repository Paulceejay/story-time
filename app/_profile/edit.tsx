import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import TextInputForm from "../components/ui/TextInputForm";

const profileEdit = () => {
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <View className="py-8 px-6 flex justify-center">
      <Text className="text-lg text-dark-white font-semibold font-MontserratAlt text-center my-8">
        Update settings
      </Text>

      <TextInputForm
        value={fullname}
        onChangeText={setFullname}
        textInputTitle="Enter full name"
      />
      <TextInputForm
        value={password}
        onChangeText={setPassword}
        textInputTitle="Password"
      />
      <TextInputForm
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        textInputTitle="Re-enter Password"
      />

      <TouchableOpacity className="bg-dark-primary py-3 px-6 rounded-full">
        <Text className="text-white text-center font-semibold">
          Save Changes
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default profileEdit;
