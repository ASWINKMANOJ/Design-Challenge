import TabBar from "@/components/TabBar";
import { Tabs, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function TabNavigation() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter(); // Move useRouter() here

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const status = await AsyncStorage.getItem("isLoggedIn");
        setIsLoggedIn(status === "true");
      } catch (error) {
        console.error("Failed to fetch login status:", error);
      } finally {
        if (!isLoggedIn) {
          router.replace("/(login)/login"); // Use router here
        }
      }
    };

    checkLoginStatus();
  }, [isLoggedIn, router]); // Add router to the dependency array

  return (
    <Tabs
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tabs.Screen options={{ title: "Home" }} name="index" />
      <Tabs.Screen options={{ title: "Discover" }} name="discover" />
      <Tabs.Screen options={{ title: "Favorite" }} name="favorite" />
      <Tabs.Screen options={{ title: "Settings" }} name="options" />
    </Tabs>
  );
}
