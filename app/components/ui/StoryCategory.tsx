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

type Props = {
  popular: string;
};

const categories = ["scary", "sad", "funny", "fantasy", "jokes"];

const StoryCategory = ({ popular }: Props) => {
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
    <View className="my-5">
      <View className="flex-row mb-5 gap-2">
        <Text
          className={`text-xl text-dark-white font-semibold font-MontserratAlt mr-2 ${popular}`}
        >
          Popular
        </Text>

        {/* items scroll of of different types of stories */}
        <FlatList
          data={categories}
          keyExtractor={(cat) => cat}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 16 }}
          renderItem={({ item }) => StoryCategoriesButton(item)}
        />
      </View>

      {/* Stories List */}
      <FlatList
        data={storiesData[activeCategory]}
        renderItem={StoriesItem}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
          marginBottom: 18,
          marginTop: 10,
        }}
      />
    </View>
  );
};

export default StoryCategory;
