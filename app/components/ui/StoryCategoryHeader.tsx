import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React, { Children } from 'react'

type Props = {
    popular: string;
    activeCategory: string;
     setActiveCategory: any,
     children: React.JSX.Element
  };

  const categories = ["scary", "sad", "funny", "fantasy", "jokes"];

const StoryCategoryHeader = ({popular, activeCategory, setActiveCategory, children}: Props) => {
    const StoryCategoriesButton = (cat: string) => (
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

  return (
    <View>
        <View>
            {children}
        </View>
      {/* Horizontal Categories */}
      <View className="flex-row mb-5 items-center">
        <Text className={`text-xl text-dark-white font-semibold font-MontserratAlt mr-2 ${popular}`}>
          Popular
        </Text>

        <FlatList
          data={categories}
          keyExtractor={(item) => item}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 16 }}
          renderItem={({ item }) => StoryCategoriesButton(item)}
        />
      </View>
    </View>
  )
}

export default StoryCategoryHeader