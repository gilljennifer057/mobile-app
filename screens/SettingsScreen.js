import React, { useState } from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { globalStyles } from "../utils/theme";

const SettingsScreen = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");


  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>SettingsScreen</Text>
    </View>
  );
};


export default SettingsScreen;
