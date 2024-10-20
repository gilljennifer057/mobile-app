// screens/LoginScreen.js
import React, { useState } from "react";
import { View, Alert } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../utils/axios";
import { globalStyles } from "../utils/theme";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("demo@gmail.com");
  const [password, setPassword] = useState("demo");

  const handleLogin = async () => {
    try {
      const { data } = await api.post(`login`, {
        email,
        password,
      });

      const token = data.token; // Adjust based on your API response
      await AsyncStorage.setItem("token", token);
      
      // Navigate to MainTabs after successful login
      navigation.replace("MainTabs");
    } catch (error) {
      console.error(
        "Login error:",
        error.response ? error.response.data : error.message
      );
      Alert.alert("Error", "Login failed. Please check your credentials.");
    }
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Login</Text>
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        mode="outlined"
        style={globalStyles.input}
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        mode="outlined"
        style={globalStyles.input}
      />
      <Button mode="contained" onPress={handleLogin} style={globalStyles.button}>
        Login
      </Button>
    </View>
  );
};

export default LoginScreen;
