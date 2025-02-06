import { useLinkBuilder, useTheme } from "@react-navigation/native";
import { LayoutChangeEvent, StyleSheet, View } from "react-native";
import TabbarButton from "./TabbarButton";
import { useState } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

export default function TabBar({ state, descriptors, navigation }: any) {
  const { colors } = useTheme();
  const { buildHref } = useLinkBuilder();

  const [dimensions, setDimensions] = useState({ height: 20, width: 1020 });

  const buttonWidth = dimensions.width / state.routes.length;

  const onTabbarLayout = (e: LayoutChangeEvent) => {
    setDimensions({
      height: e.nativeEvent.layout.height,
      width: e.nativeEvent.layout.width,
    });
  };

  const tabPositionX = useSharedValue(0);

  const animatedTab = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: tabPositionX.value,
        },
      ],
    };
  });

  return (
    <View onLayout={onTabbarLayout} style={styles.tabbar}>
      <Animated.View
        style={[
          {
            position: "absolute",
            backgroundColor: "#fff",
            borderRadius: 30,
            height: dimensions.height - 15,
            width: buttonWidth - 15,
            marginHorizontal: 6,
          },
          animatedTab,
        ]}
      />
      {state.routes.map((route: any, index: any) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          tabPositionX.value = withSpring(buttonWidth * index, {
            duration: 1200,
          });
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TabbarButton
            key={route.key}
            onPress={onPress}
            onLongPress={onLongPress}
            label={label}
            routeName={route.name}
            isFocused={isFocused}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabbar: {
    position: "absolute",
    bottom: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#212529",
    marginHorizontal: 32,
    borderRadius: 36,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    paddingVertical: 28,
  },
});
