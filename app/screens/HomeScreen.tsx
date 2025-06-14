import { View, Text, ActivityIndicator, ScrollView, FlatList  } from 'react-native'
import React from 'react'
import StoryCategory from '../components/ui/StoryCategory'
import NewStories from '../components/ui/NewStories'
import { storiesData } from '../data/storiesData'

const items = storiesData.sad

const HomeScreen = () => {
  return (
    <ScrollView className="py-8 pt-36 px-6 flex-1">
      {/* <NewStories /> */}
         
    <FlatList
        data={items}
        renderItem={NewStories}
        keyExtractor={(item) => item.id}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
        decelerationRate={"fast"}
        style={{ flex: 1 }}
  contentContainerStyle={{ padding: 16 }}
      />
      <StoryCategory popular="block" />
    </ScrollView>
  )
}

export default HomeScreen