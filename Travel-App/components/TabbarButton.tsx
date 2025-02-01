import { Text, PlatformPressable } from "@react-navigation/elements";
import { StyleSheet } from "react-native";

export default function TabbarButton({
  onPress,
  onLongPress,
  label,
  routeName,
  isFocused,
}: {
  onPress: () => void;
  onLongPress: () => void;
  label: string;
  routeName: any;
  isFocused: boolean;
}) {
  return (
    <PlatformPressable
      onPress={onPress}
      onLongPress={onLongPress}
      style={{ flex: 1 }}
    >
      <Text style={{ color: isFocused ? "#ade" : "#233411" }}>{label}</Text>
    </PlatformPressable>
  );
}

const styles = StyleSheet.create({
  tabbarItem: {
    flex: 1,
    gap: 4,
    alignItems: "center",
    justifyContent: "center",
    textAlignVertical: "center",
    textAlign: "center",
  },
});
