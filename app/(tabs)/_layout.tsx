import { Tabs } from "expo-router";
import React from "react";
import { Platform, TouchableOpacity, Text } from "react-native";

import CustomTabsButton from "../components/ui/CustomTabsButton";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarButton: (props) => (
            <CustomTabsButton {...props} route="/index" />
          ),
        }}
      />

      <Tabs.Screen
        name="stories"
        options={{
          tabBarButton: (props) => (
            <CustomTabsButton {...props} route="/stories" />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          tabBarButton: (props) => (
            <CustomTabsButton {...props} route="/profile" />
          ),
        }}
      />
    </Tabs>
  );
}
