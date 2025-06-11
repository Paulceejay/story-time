import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import { useRouter } from "expo-router";

const UpdateSettings = () => {
  const router = useRouter()
  
const ProfileEditHandler = () => {
  router.push("/_profile/edit")
}
  return (
    <View className="flex-row justify-between my-5">
      {/* icons and texts all together */}
      <View className="flex-row gap-3">
        {/* for the icons */}
        <Feather
          className="bg-dark-formBtn p-4 rounded-full"
          name="settings"
          size={20}
          color="#E28600"
        />
        {/* for texts alone */}
        <View>
          <Text className="text-lg text-dark-white font-semibold font-MontserratAlt">
            Update settings
          </Text>
          <Text className="text-sm text-[#B7B7B7] font-normal font-MontserratAlt">
            Full name, password
          </Text>
        </View>
      </View>

      {/* Arrow right section */}
      <View>
        <TouchableOpacity onPress={ProfileEditHandler}>
          <Entypo name="chevron-small-right" size={35} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UpdateSettings;
