import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Story, storiesData } from "@/app/data/storiesData";
import StoriesItem from "./StoriesItem";

const categories = ["scary", "sad", "funny", "fantasy", "jokes"];

const StoryCategory = () => {
  const [activeCategory, setActiveCategory] = useState("sad");

  const StoryCategoriesButton = (cat: string) => {
    return (
      <TouchableOpacity
        key={cat}
        onPress={() => setActiveCategory(cat)}
        className={`${
          activeCategory === cat ? "bg-dark-primary" : "bg-dark-background"
        } rounded-full mx-2 py-2 px-6`}
      >
        <Text className="text-dark-white font-bold font-MontserratAlt text-sm capitalize">
          {cat.charAt(0).toUpperCase() + cat.slice(1)}
        </Text>
      </TouchableOpacity>
    );
  };


  return (
   <View className="mt-2">
     <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {categories.map(StoryCategoriesButton )}
    </ScrollView>

    {/* Stories List */}
    <FlatList
        data={storiesData[activeCategory]}
        renderItem={StoriesItem}
        numColumns={2}
        contentContainerStyle={{ padding: 10 }}
      columnWrapperStyle={{ justifyContent: 'space-between', marginBottom: 18, marginTop: 10 }}
      />
   </View>
  );
};

export default StoryCategory;
