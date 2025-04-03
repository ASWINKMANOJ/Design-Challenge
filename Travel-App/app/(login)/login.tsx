import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function login() {
  const route = useRouter();
  useEffect(() => {
    const OnboardStatus = async () => {
      try {
        const status = await AsyncStorage.getItem("@onboarded");
        if (status != "true") {
          route.replace("/Onboarding");
        }
      } catch (error) {
        console.error("Failed to fetch onboarding status:", error);
      }
    };
    OnboardStatus();
  }, [route]);

  const clearAsync = async () => {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      console.error("Error clearing AsyncStorage:", error);
    } finally {
      route.replace("/Onboarding");
    }
  };
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <TouchableOpacity onPress={clearAsync}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>clear async</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});
