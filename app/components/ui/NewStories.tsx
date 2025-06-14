import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  ListRenderItem,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";
import { Story } from "@/app/data/storiesData";

const img = require("../../../assets/images/welcome-img.png");

const NewStories: ListRenderItem<Story> = ({item}) => {
  return (
    <View className="overflow-hidden relative mb-2 rounded-2xl w-10/12">
      <Image source={item.image} resizeMode="cover" className="w-full h-64 rounded-2xl" />
      <TouchableOpacity className="absolute top-3 right-3 z-10 bg-dark-background rounded-full">
        <Entypo className="p-2" name="bookmark" size={25} color="#E28600" />
      </TouchableOpacity>

  {/* Gradient overlay */}
  <View className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />

      <View className="absolute bottom-3 left-3 z-10">
        <Text className="text-xs text-dark-white font-MontserratAlt font-normal">Read time : {item.time}</Text>
        <Text className="text-xl text-dark-white font-MontserratAlt font-bold">{item.title}</Text>
      </View>

      <TouchableOpacity className="absolute bottom-3 right-3 z-10 bg-dark-white rounded-full">
        <Text className="text-dark-primary py-2 px-4">Read</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NewStories;
