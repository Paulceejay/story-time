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
import { useRouter } from "expo-router";
import { slugify } from "@/app/lib/slugify";

const NewStories: ListRenderItem<Story> = ({ item }) => {
  const router = useRouter()
  return (
    <View className="relative mr-4 w-72 h-64 rounded-2xl overflow-hidden">
      <Image
        source={item.image}
        resizeMode="cover"
        className="absolute w-full h-full rounded-2xl"
      />

      {/* Dark gradient overlay */}
      <View className="absolute inset-0 bg-black/40" />

      {/* Bookmark icon */}
      <TouchableOpacity className="absolute top-3 right-3 z-10 bg-dark-background p-2 rounded-full">
        <Entypo name="bookmark" size={25} color="#E28600" />
      </TouchableOpacity>

      {/* Text & Read button */}
      <View className="absolute bottom-3 left-3 z-10">
        <Text className="text-xs text-dark-white font-MontserratAlt">Read time: {item.time}</Text>
        <Text className="text-xl text-dark-white font-MontserratAlt font-bold">{item.title}</Text>
      </View>

      <TouchableOpacity onPress={() => router.push(`/_story/${slugify(item.title)}`)} className="absolute bottom-3 right-3 z-10 bg-dark-white rounded-full">
        <Text className="text-dark-primary py-2 px-4">Read</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NewStories;
