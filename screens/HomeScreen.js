import React, { useState } from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { globalStyles } from "../utils/theme";

const HomeScreen = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");


  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Home Coming Soon</Text>
    </View>
  );
};


export default HomeScreen;
