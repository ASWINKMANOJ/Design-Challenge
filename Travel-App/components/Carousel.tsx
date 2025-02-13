import { Destinations } from "@/constants/Destinations";
import {
  View,
  FlatList,
  StyleSheet,
  Dimensions,
  ImageProps,
} from "react-native";
import Card from "./Card";

const { height } = Dimensions.get("screen");

export default function Carousel() {
  return (
    <View style={styles.container}>
      <FlatList
        data={Destinations}
        renderItem={({ item }) => <Card {...item} />}
        style={styles.list}
        horizontal
        keyExtractor={(item) => item.destination}
        showsHorizontalScrollIndicator={false}
        snapToAlignment="start"
        snapToInterval={Dimensions.get("screen").width - 80 + 20} // Adjusted card width + margin + padding
        decelerationRate="fast"
        contentContainerStyle={styles.contentContainer}
      />
      <View style={styles.block} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  block: {
    flex: 1,
  },
  list: {
    height: height / 3,
  },
  contentContainer: {
    paddingHorizontal: 20, // Adjusted padding
  },
});
