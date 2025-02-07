import { View, Text, StyleSheet, Dimensions } from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

const { width } = Dimensions.get("window"); // Get screen width
const ITEM_WIDTH = width * 0.75; // 75% of screen width
const SPACING = 10; // Spacing between items
const HORIZONTAL_PADDING = 22; // Padding for FlatList
const datas = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Item = ({
  data,
  scrollX,
  index,
}: {
  data: number;
  scrollX: SharedValue<number>;
  index: number;
}) => {
  const ITEM_SPACING = ITEM_WIDTH + SPACING * 2; // Account for margin spacing

  const rAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(
            scrollX.value,
            [
              (index - 1) * ITEM_SPACING,
              index * ITEM_SPACING,
              (index + 1) * ITEM_SPACING,
            ],
            [-ITEM_WIDTH * 0.25, 0, ITEM_WIDTH * 0.25],
            Extrapolation.CLAMP
          ),
        },
        {
          scale: interpolate(
            scrollX.value,
            [
              (index - 1) * ITEM_SPACING,
              index * ITEM_SPACING,
              (index + 1) * ITEM_SPACING,
            ],
            [0.8, 1, 0.8],
            Extrapolation.CLAMP
          ),
        },
      ],
    };
  });

  return (
    <Animated.View style={[styles.itemContainer, rAnimatedStyle]}>
      <Text style={styles.text}>{data}</Text>
    </Animated.View>
  );
};

export default function Carousel() {
  const scrollX = useSharedValue(0);

  const onScrollHandler = useAnimatedScrollHandler({
    onScroll: (e) => {
      scrollX.value = e.contentOffset.x;
    },
  });

  return (
    <View style={styles.container}>
      <Animated.FlatList
        data={datas}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item, index }) => (
          <Item data={item} scrollX={scrollX} index={index} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={onScrollHandler}
        scrollEventThrottle={16}
        pagingEnabled
        snapToAlignment="center"
        decelerationRate="fast"
        contentContainerStyle={{ paddingHorizontal: HORIZONTAL_PADDING }} // Apply padding
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  itemContainer: {
    height: 500,
    width: ITEM_WIDTH,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ddd",
    borderRadius: 10,
    marginHorizontal: SPACING, // Maintain spacing without affecting translation
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
