import { View, Text, ListRenderItem } from 'react-native'
import React from 'react'
import { Story } from "@/app/data/storiesData";


const StoriesItem: ListRenderItem<Story> = ({item}) => {
  return (
    <View>
      <Text>StoriesItem</Text>
    </View>
  )
}

export default StoriesItem