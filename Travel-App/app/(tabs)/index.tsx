import Header from "@/components/Header";
import Slider from "@/components/Slider";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.header}>
        <Header />
      </View>
      <View style={styles.slider}>
        <Slider />
      </View>
      <View style={styles.box} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    height: "15%",
  },
  header: {
    height: "25%",
  },
  slider: {
    height: "60%",
  },
});
