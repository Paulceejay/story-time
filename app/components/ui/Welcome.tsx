import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

const Welcome = () => {
  return (
    <View>
      <Text className="text-dark-white font-MontserratAlt font-semibold text-5xl leading-tight">
        Welcome little adventurers!
      </Text>

      <Text className="text-dark-white text-4xl font-normal my-4 font-Pompiere">
        Get ready for magical journeys with bedtime stories!
      </Text>

      <View className="bg-dark-primary w-ful h-16 rounded-full my-2">
        <TouchableOpacity className="flex-1 justify-center items-center w-full">
          <Text className="text-dark-white font-MontserratAlt font-normal text-xl">
            Get started
          </Text>
          <AntDesign
            className="absolute right-5"
            name="arrowright"
            size={24}
            color="white"
          />
        </TouchableOpacity>

        {/* <View>
          
          </View> */}
      </View>
    </View>
  );
};

export default Welcome;
