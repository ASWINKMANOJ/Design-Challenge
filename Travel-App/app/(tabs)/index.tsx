import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <View>
          <Text style={styles.welcomeText}>Hello Aswin,</Text>
          <Text style={styles.subtitle}>Welcome to TripGlide</Text>
        </View>
        <View style={styles.profileIcon} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "30%",
    width: "100%",
    padding: 16,
  },
  titleContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  welcomeText: {
    fontSize: 28,
    fontFamily: "Poppins-Bold", // Using custom font
    color: "#272635",
  },
  subtitle: {
    fontSize: 16,
    fontFamily: "Poppins-Regular", // Using custom font
    color: "#A6A6A8",
  },
  profileIcon: {
    height: 60,
    aspectRatio: 1 / 1,
    borderRadius: 30,
    backgroundColor: "#fed222",
  },
});
