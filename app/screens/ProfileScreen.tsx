import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import Container from "../components/ui/Container";

const ProfileScreen = () => {
  return (
    <SafeAreaView>
      <Container className="my-5">
        <Text className="text-dark-white py-5">Profile Setting</Text>
      </Container>
    </SafeAreaView>
  );
};

export default ProfileScreen;
