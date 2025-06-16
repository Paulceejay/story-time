import { useLocalSearchParams } from "expo-router";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { storiesData } from "../data/storiesData";
import { slugify } from "../lib/slugify";
import Entypo from "@expo/vector-icons/Entypo";
import { useRouter } from "expo-router";

const StoryDetails = () => {
  const router = useRouter()
  const { slug } = useLocalSearchParams();

  // Flatten all categories into a single array
  const allStories = Object.values(storiesData).flat();

  // Find story by title
  const story = allStories.find((s) => slugify(s.title) === slug);

  if (!story) {
    return (
      <View className="p-4">
        <Text className="text-white text-xl">Story not found 😢</Text>
      </View>
    );
  }

  return (
    <ScrollView className="">
      <View className="relative w-full h-72 overflow-hidden">
        {/* Image of the story*/}
        <Image
          source={story.image}
          resizeMode="cover"
          className="w-full h-full"
        />

        {/* Gradient Overlay */}
        <LinearGradient
          colors={["rgba(0,0,0,0)", "#0A0908"]}
          className="absolute inset-0 rounded-2xl"
        />

        {/* Icons */}
        <TouchableOpacity  onPress={() => router.back()} className="absolute top-10 left-6 z-10 bg-[#FFFFFF2E] p-2">
          <Entypo name="chevron-small-left" size={25} color="#FFFFFF" />
        </TouchableOpacity>
        <TouchableOpacity className="absolute top-10 right-6 z-10 bg-[#FFFFFF2E] p-2 rounded-full">
          <Entypo name="bookmark" size={25} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      {/* all the text items of the story */}
      <View className="mb-5 px-6">
        <Text className="text-dark-white text-xs font-normal font-Montserrat bg-[#FFFFFF2E] p-2 mb-3 w-[30%]">
          Read time: {story.time}
        </Text>
        <Text className="text-dark-white text-2xl font-normal font-Pacifico mb-5">
          {story.title}
        </Text>
        <Text className="text-dark-white text-base font-normal font-Montserrat text-justify">
          {story.content}
        </Text>
      </View>
    </ScrollView>
  );
};

export default StoryDetails;
