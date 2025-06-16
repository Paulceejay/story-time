import { View, Text, TextInput, FlatList, TouchableOpacity, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import Feather from "@expo/vector-icons/Feather";
import { storyTypeDatas } from "../data/storyType";
import StoryCategory from "../components/ui/StoryCategory";

const StoriesScreen = () => {
  return (
   <ScrollView className="py-8 px-6">
      {/* header section */}
      <View className="my-5 flex-row justify-center gap-1">
        <Text className="text-dark-white text-2xl font-Pacifico font-normal mr-px">
          All
        </Text>
        <Text className="text-dark-primary text-2xl font-Pacifico font-normal ml-px">
          Story
        </Text>
      </View>

      {/* storries search */}
      <View className="flex-row my-4 h-16 bg-[#FFFFFF0A] gap-1 px-4">
        <View className="text-dark-white flex justify-center items-center">
          <Feather name="search" size={20} color="#FFFFFF8F" />
        </View>
        <TextInput
          className="w-full h-full px-4 font-Montserrat bg-transparent text-dark-white font-bold"
          placeholder="Search"
          placeholderTextColor={"#FFFFFF8F"}
          editable={false}
        />
      </View>

      <View>
        <StoryCategory popular='hidden' />
      </View>
   
   
   </ScrollView>
  );
};

export default StoriesScreen;
