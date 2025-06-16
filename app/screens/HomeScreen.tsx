import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  FlatList,
} from "react-native";
import React from "react";
import StoryCategory from "../components/ui/StoryCategory";
import NewStories from "../components/ui/NewStories";
import { storiesData } from "../data/storiesData";
import { useUserProfile } from "../hooks/useUserProfile";
import Ionicons from '@expo/vector-icons/Ionicons';

const items = storiesData.fantasy;

const HomeScreen = () => {
  const { profile } = useUserProfile()
  return (
    <ScrollView className="py-8 px-6 flex-1">
      {/* Welcome back and notification Icon */}
     <View className="flex-row justify-between">
     <View className="my-7 flex-row gap-1">
        <Text className="text-dark-white text-2xl font-Pacifico font-normal mr-px">
        Welcome back
        </Text>
        <Text className="text-dark-primary text-2xl font-Pacifico font-normal ml-px">
          {profile?.full_name?.split(" ")[0]}
        </Text>
      </View>

      {/* icon */}
      <View className="flex justify-center items-center">
      <Ionicons name="notifications" size={24} color="#FFFFFF" />
      </View>
     </View>


      {/* new stories section */}
      <View>
        <Text className="text-dark-white text-xl font-Montserrat font-bold my-2 capitalize">
          {" "}
          New Stories
        </Text>

        <FlatList
          data={items}
          renderItem={NewStories}
          keyExtractor={(item) => item.id}
          horizontal
          pagingEnabled
          snapToAlignment="center"
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <StoryCategory popular="block" />
    </ScrollView>
  );
};

export default HomeScreen;
