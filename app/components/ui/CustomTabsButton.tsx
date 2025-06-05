import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { Home, User, LayoutGrid } from "lucide-react-native";
import { usePathname } from "expo-router";
import type { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import { Colors } from "@/app/constants/Colors";

type TabsProps = BottomTabBarButtonProps & {
  route: string;
};

export default function CustomTabsButton({ route, onPress }: TabsProps) {
  const pathname = usePathname();
  const focused =
    (route === "/index" && (pathname === "/" || pathname === "/index")) ||
    pathname === route;

  const iconColor = focused ? Colors.dark.primary : Colors.dark.white;
  const iconSize = route === "/stories" ? 30 : 25;
  const isCenter = route === "/stories";

  const getIcon = () => {
    switch (route) {
      case "/index":
        return <Home size={iconSize} color={iconColor} />;
      case "/stories":
        return <LayoutGrid size={iconSize} color={iconColor} />;
      case "/profile":
        return <User size={iconSize} color={iconColor} />;
      default:
        return null;
    }
  };

  const getLabel = () => {
    switch (route) {
      case '/index':
        return 'Home';
      case '/profile':
        return 'Profile';
      default:
        return '';
    }
  };


  return (
    <TouchableOpacity
      onPress={onPress}
      className={`
        ${isCenter ? "p-3 rounded-full" : "p-2"}
        ${
          focused && !isCenter ? "border border-dark-primary rounded-full" : ""
        } ${focused && isCenter ? "bg-dark-background" : ""}
        items-center justify-center mx-2 flex-1 mt-3
      `}
    >
      <View className="flex-row gap-2">
        {getIcon()}
        {!isCenter && focused && (
          <Text className="text-base text-dark-primary mt-1 capitalize font-normal font-MontserratAlt">
            {getLabel()}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
}