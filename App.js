// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Provider as PaperProvider } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";

import { theme } from "./utils/theme";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SettingsScreen from "./screens/SettingsScreen";
import ChartScreen from "./screens/ChartScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Bottom Tabs Navigation Component
const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
          } else if (route.name === "Charts") {
            iconName = focused ? "bar-chart" : "bar-chart-outline"; // Update icon names
          }

          // Return the icon component
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarLabel: () => null, // Hide the label
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        options={{ headerShown: false }} // Explicitly hide header for Home
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{ headerShown: false }} // Explicitly hide header for Home
        name="Profile"
        component={ProfileScreen}
      />
      <Tab.Screen
        options={{ headerShown: false }} // Explicitly hide header for Home
        name="Settings"
        component={SettingsScreen}
      />

      <Tab.Screen
        options={{ headerShown: false }} // Explicitly hide header for Home
        name="Charts"
        component={ChartScreen}
      />
    </Tab.Navigator>
  );
};

// Main App Component with Stack and Tabs
const App = () => {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          {/* Stack for the Login Screen */}
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />

          {/* Stack for the Main Tabs (after login) */}
          <Stack.Screen
            name="MainTabs"
            component={MainTabs}
            options={{ headerShown: false }} // Hide the header bar for the tabs
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
