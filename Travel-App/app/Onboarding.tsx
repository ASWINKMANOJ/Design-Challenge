import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFonts } from "expo-font";
import { useRouter } from "expo-router";
import LottieView from "lottie-react-native";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";

export default function Onboarding() {
  const route = useRouter();
  const [fontsLoaded] = useFonts({
    "Montserrat-SemiBold": require("../assets/fonts/Montserrat-SemiBold.ttf"),
    "Montserrat-Thin": require("../assets/fonts/Montserrat-Thin.ttf"),
    "Montserrat-Regular": require("../assets/fonts/Montserrat-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const handlePress = async () => {
    try {
      await AsyncStorage.setItem("@onboarded", "true");
    } catch (error) {
      console.error("Error setting onboarding status:", error);
    } finally {
      route.replace("/(login)/login");
    }
  };

  const width = Dimensions.get("screen").width;
  return (
    <View style={styles.container}>
      <View style={styles.lottieContainer}>
        <LottieView
          source={require("../lottie/van-animation.json")}
          autoPlay
          loop
          resizeMode="contain"
          style={{ width: width, height: width }}
        />
      </View>
      <View style={styles.textContainer}>
        <View style={{ width: "100%", alignItems: "center" }}>
          <Text style={styles.titleText}>Welcome to Glide</Text>
          <Text style={styles.descriptionText}>
            Your Ultimate Travel Companion. Discover, Plan, and Book Your Next
            Adventure with Ease.
          </Text>
        </View>
        <TouchableOpacity onPress={handlePress}>
          <View style={styles.buttonView}>
            <Text style={styles.buttonText}>Get Started</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  lottieContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  titleText: {
    fontSize: 24,
    fontFamily: "Montserrat-SemiBold",
    color: "#212529",
  },
  descriptionText: {
    fontSize: 16,
    fontFamily: "Montserrat-Regular",
    color: "#5F5F5F",
    textAlign: "center",
    marginTop: 10,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: "Montserrat-SemiBold",
    color: "#fff",
    textAlign: "center",
  },
  buttonView: {
    backgroundColor: "#212529",
    borderRadius: 40,
    paddingVertical: 20,
    paddingHorizontal: 40,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
  },
});
