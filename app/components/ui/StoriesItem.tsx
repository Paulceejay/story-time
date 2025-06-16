import {
  View,
  Text,
  ListRenderItem,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { Story } from "@/app/data/storiesData";
import { useRouter } from "expo-router";
import { slugify } from "@/app/lib/slugify";

const StoriesItem: ListRenderItem<Story> = ({ item }) => {
  const router = useRouter()
  return (
    <TouchableOpacity onPress={() => router.push(`/_story/${slugify(item.title)}`)} className="w-[48%] h-fit">
      <Image
        source={item.image}
        resizeMode="cover"
        height={100}
        className="bg-[#D9D9D9] justify-center items-center w-full h-32 rounded-t-[55px]"
      />
      <View className="bg-[#222020] px-3 py-5 rounded-b-[55px]">
        <Text className="text-white text-base font-bold font-MontserratAlt text-center mb-1">
          {item.title}
        </Text>
        <Text className="text-white text-xs font-normal font-Montserrat text-center mt-px">
          Read Time: {item.time}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default StoriesItem;
