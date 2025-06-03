import "../../../global.css";
import React, { JSX } from "react";
import { ImageBackground, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

const image = require("../../../assets/images/welcome-img.png");

type Props = {
  children: string | JSX.Element ,
  className: string,
}

const BackgroundImage = ({ children, className }: Props) => {
  return (
    
      <ImageBackground
        source={image}
        resizeMode="cover"
        className={`flex-1 justify-center ${className}`}
      >
        {children}
      </ImageBackground>
   
  );
};

export default BackgroundImage;
