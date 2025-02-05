import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useFonts } from "expo-font";
import Feather from "@expo/vector-icons/Feather";

export default function Header() {
  const [fontsLoaded] = useFonts({
    "Montserrat-SemiBold": require("../assets/fonts/Montserrat-SemiBold.ttf"),
    "Montserrat-Thin": require("../assets/fonts/Montserrat-Thin.ttf"),
    "Montserrat-Regular": require("../assets/fonts/Montserrat-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null; // or a loading screen
  }
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View>
          <Text style={styles.profileText}>Hello Vanessa,</Text>
          <Text style={{ fontFamily: "Montserrat-Regular", color: "#5F5F5F" }}>
            Welcome to TripGlide
          </Text>
        </View>
        <View style={styles.profileIcon}>
          <Image
            source={require("../assets/images/40.jpg")}
            style={{ width: "100%", height: "100%" }}
          />
        </View>
      </View>
      <View style={styles.searchBar}>
        <Pressable
          style={{ ...styles.searchBarIcon, backgroundColor: "transparent" }}
        >
          <Feather name="search" size={24} color="#212529" />
        </Pressable>
        <TextInput
          style={{ flex: 1, paddingHorizontal: 8, fontSize: 16 }}
          placeholder="Search"
        />
        <Pressable style={styles.searchBarIcon}>
          <Feather name="list" size={24} color="white" />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 22,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  profileIcon: {
    height: 60,
    aspectRatio: 1,
    borderRadius: 30,
    overflow: "hidden",
    backgroundColor: "#eddffe",
    elevation: 5,
  },
  profileContainer: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  profileText: {
    fontSize: 28,
    fontFamily: "Montserrat-SemiBold",
    color: "#212529",
  },
  searchBar: {
    borderRadius: 30,
    width: "100%",
    height: 60,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginVertical: 12,
    elevation: 10,
    backgroundColor: "#fefefe",
  },
  searchBarIcon: {
    height: 60,
    aspectRatio: 1,
    borderRadius: 30,
    backgroundColor: "#212529",
    alignItems: "center",
    justifyContent: "center",
  },
});
