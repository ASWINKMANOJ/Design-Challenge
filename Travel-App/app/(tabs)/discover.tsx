import { View, Text, StyleSheet } from "react-native";

export default function Discover() {
  return (
    <View style={styles.container}>
      <Text>This is Discover Screen</Text>
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
