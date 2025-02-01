import { Icons } from "@/constants/Icons";
import { Text, PlatformPressable } from "@react-navigation/elements";
import { useEffect } from "react";
import { Pressable, StyleSheet } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

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
  routeName: keyof typeof Icons;
  isFocused: boolean;
}) {
  const scale = useSharedValue(0);

  useEffect(() => {
    scale.value = withSpring(
      typeof isFocused === "boolean" ? (isFocused ? 1 : 0) : isFocused,
      { duration: 350 }
    );
  }, [isFocused, scale]);

  const animatedLabelStyle = useAnimatedStyle(() => {
    const opacity = interpolate(scale.value, [0, 1], [1, 0]);

    return { opacity };
  });

  const animatedIconStyle = useAnimatedStyle(() => {
    const scaleValue = interpolate(scale.value, [0, 1], [1, 1.3]);
    const translateValue = 8;

    return {
      transform: [{ scale: scaleValue }, { translateY: translateValue }],
    };
  });

  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.tabbarItem}
    >
      <Animated.View style={animatedIconStyle}>
        {Icons[routeName]({ color: isFocused ? "#ade" : "#233411" })}
      </Animated.View>

      <Animated.Text
        style={[{ color: isFocused ? "#ade" : "#233411" }, animatedLabelStyle]}
      >
        {label}
      </Animated.Text>
    </Pressable>
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
