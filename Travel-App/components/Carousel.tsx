import { Destinations } from "@/constants/Destinations";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";

type ItemProps = {
  destination: string;
  country: string;
  ratings: number;
  reviews: number;
  imageKey: string;
};

const destinationImages: any = {
  paris: require("../assets/images/paris.jpg"),
  machuPicchu: require("../assets/images/machu-pichu.jpg"),
  maldives: require("../assets/images/maldives.jpg"),
  swissAlps: require("../assets/images/swiss-alps.jpg"),
  tanzania: require("../assets/images/tanzania.jpg"),
  tokyo: require("../assets/images/tokyo.jpg"),
};

const { width } = Dimensions.get("window");
const CARD_WIDTH = width * 0.8;
const SPACING = 10;

export default function Carousel() {
  return (
    <View style={styles.container}>
      <Text>Carousel</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
