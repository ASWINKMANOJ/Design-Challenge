import TabBar from "@/components/TabBar";
import { Tabs } from "expo-router";

export default function TabNavigation() {
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
