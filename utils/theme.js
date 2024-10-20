import { DefaultTheme } from "react-native-paper";
import { StyleSheet } from "react-native";

// Define a color palette
const colors = {
  primary: "#6200ee",
  accent: "#03dac4",
  background: "#f5f5f5",
  surface: "#ffffff",
  textPrimary: "#333",
  textSecondary: "#666",
  error: "#B00020",
  disabled: "#f1f1f1",
};

// Define a base theme using React Native Paper's DefaultTheme
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    accent: colors.accent,
    background: colors.background,
    surface: colors.surface,
    error: colors.error,
    text: colors.textPrimary,
  },
};

// Global styles that can be reused across screens
const globalStyles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     padding: 20,
  //     backgroundColor: colors.background,
  //   },
  //   title: {
  //     fontSize: 30,
  //     fontWeight: "bold",
  //     color: colors.textPrimary,
  //     marginBottom: 10,
  //   },
  //   subtitle: {
  //     fontSize: 18,
  //     color: colors.textSecondary,
  //     marginBottom: 20,
  //   },
  //   input: {
  //     width: "100%",
  //     marginBottom: 15,
  //     backgroundColor: colors.surface,
  //   },
  //   button: {
  //     width: "100%",
  //     borderRadius: 5,
  //     marginTop: 10,
  //     backgroundColor: colors.primary,
  //   },
  //   buttonContent: {
  //     paddingVertical: 10,
  //   },
  //   link: {
  //     color: colors.primary,
  //     fontWeight: "bold",
  //   },

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "#666",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    marginBottom: 15,
    backgroundColor: "#fff",
  },
  button: {
    width: "100%",
    borderRadius: 5,
    marginTop: 10,
    backgroundColor: "#6200ee", // Purple button
  },
  buttonContent: {
    paddingVertical: 10,
  },
  footerText: {
    marginTop: 20,
    fontSize: 16,
    color: "#666",
  },
  link: {
    color: "#6200ee",
    fontWeight: "bold",
  },
});

export { theme, globalStyles, colors };
