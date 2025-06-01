import "../../../global.css";
import React, { JSX } from "react";
import { ImageBackground, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import image from "../../../assets/images/welcome-img.png";

// const image = {uri: '../../../assets/images/welcome-img.png'};

type Props = {
  children: string | JSX.Element,
  bgOpacity: string
}

const BackgroundImage = ({ children, bgOpacity }: Props) => {
  return (
    <View className="flex-1">
      <ImageBackground
        source={image}
        resizeMode="cover"
        className={`flex-1 justify-center ${bgOpacity}`}
      >
        {children}
      </ImageBackground>
    </View>
  );
};

export default BackgroundImage;
