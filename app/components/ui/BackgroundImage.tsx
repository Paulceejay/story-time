import "../../../global.css";
import React, { JSX } from "react";
import { ImageBackground, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

const image = require("../../../assets/images/welcome-img.png");

type Props = {
  children: string | JSX.Element;
  className: string;
};

const BackgroundImage = ({ children, className }: Props) => {
  return (
    <ImageBackground
      source={image}
      resizeMode="cover"
      className={`flex-1 justify-center ${className}`}
    >
      {children}
      <LinearGradient
  colors={[
    "rgba(0, 0, 0, 0.65)",   // previously 0.624
    "rgba(0, 0, 0, 0)",  // previously 0.96
    "rgba(0, 0, 0, 0)",  // previously 0.96
  ]}
  locations={[0.65, 0, 0]}
  start={{ x: 1, y: 0.8 }}
  end={{ x: 1, y: 1 }}
  className="absolute inset-0"
      >
        {children}
      </LinearGradient>
    </ImageBackground>
  );
};

export default BackgroundImage;
