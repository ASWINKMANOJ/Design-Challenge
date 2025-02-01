import TabBar from "@/components/TabBar";
import { Tabs } from "expo-router";

export default function TabNavigation() {
  return (
    <Tabs
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tabs.Screen name="index" />
      <Tabs.Screen name="discover" />
      <Tabs.Screen name="favorite" />
      <Tabs.Screen name="options" />
    </Tabs>
  );
}
