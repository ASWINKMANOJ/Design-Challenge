import { Text, View } from "react-native";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function login() {
  const route = useRouter();
  useEffect(() => {
    const OnboardStatus = async () => {
      try {
        const status = await AsyncStorage.getItem("onboarded");
        if (status === "true") {
          route.replace("/Onboarding");
        } else {
          route.replace("/Onboarding");
        }
      } catch (error) {
        console.error("Failed to fetch onboarding status:", error);
      }
    };
    OnboardStatus();
  }, [route]);
  return (
    <View>
      <Text>Login</Text>
    </View>
  );
}
