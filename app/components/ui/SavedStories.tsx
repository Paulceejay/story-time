import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";

const SavedStories = () => {
  return (
    <View className="flex-row justify-between my-2">
      {/* icons and texts all together */}
      <View className="flex-row gap-3">
        {/* for the icons */}
        <Entypo
          className="bg-dark-formBtn p-4 rounded-full"
          name="bookmark"
          size={20}
          color="#E28600"
        />

        {/* for texts alone */}
        <View>
          <Text className="text-lg text-dark-white font-semibold font-MontserratAlt">
            Saved
          </Text>
          <Text className="text-sm text-[#B7B7B7] font-normal font-MontserratAlt">
            45 Saved stories
          </Text>
        </View>
      </View>

      {/* Arrow right section */}
      <View>
        <TouchableOpacity>
          <Entypo name="chevron-small-right" size={35} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SavedStories;
