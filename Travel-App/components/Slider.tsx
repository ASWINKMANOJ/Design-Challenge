// components/Slider.tsx
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";
import Carousel from "./Carousel";
import TripHeader from "./TripHeader";

export default function Slider() {
  const [active, setActive] = useState("1");
  const [fontsLoaded] = useFonts({
    "InstrumentSans-Medium": require("../assets/fonts/InstrumentSans-Medium.ttf"),
    "Montserrat-SemiBold": require("../assets/fonts/Montserrat-SemiBold.ttf"),
  });

  return (
    <View style={styles.container}>
      <TripHeader active={active} setActive={setActive} />
      <View style={{ flex: 1 }}>
        <Carousel />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
