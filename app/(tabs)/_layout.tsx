import { Tabs, usePathname } from "expo-router";
import React from "react";
import { Platform, TouchableOpacity, Text } from "react-native";

import CustomTabsButton from "../components/ui/CustomTabsButton";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function TabLayout() {
  const pathname = usePathname();

  const hideTabBarRoutes = [
    "/_auth/profileEdit",
    "/_auth/login",
    "/_auth/register",
    "/_auth",
    "/_profile/edit",
  ];

  const shouldHideTabBar = hideTabBarRoutes.includes(pathname);

  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        tabBarStyle: shouldHideTabBar
          ? { display: "none" }
          : Platform.select({
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