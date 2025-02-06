import { Destinations } from "@/constants/Destinations";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import {
  ImageBackground,
  View,
  Text,
  ImageProps,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

// Define the type for props
type ItemProps = {
  country: string;
  destination: string;
  image: ImageProps;
  ratings: number;
  reviews: number;
};

const data: ItemProps = Destinations[0];

export const Card = ({
  country,
  image,
  ratings,
  reviews,
  destination,
}: ItemProps) => {
  return (
    <View style={styles.container} key={destination}>
      <ImageBackground source={image} style={styles.image} resizeMode="cover">
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.8)"]}
          style={styles.gradient}
        >
          <View style={styles.overlay}>
            <TouchableOpacity style={styles.iconContainer}>
              <Ionicons name="heart-outline" size={24} color="white" />
            </TouchableOpacity>
            <View
              style={{
                alignItems: "flex-start",
                justifyContent: "space-evenly",
                width: "100%",
              }}
            >
              <Text style={styles.countryText}>{country}</Text>
              <Text style={styles.countryText}>{destination}</Text>
              <Text style={styles.countryText}>{ratings}</Text>
              <Text style={styles.countryText}>{reviews}</Text>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    overflow: "hidden",
    marginHorizontal: 20,
  },
  image: {
    height: 500,
    width: 300,
    borderRadius: 15,
    overflow: "hidden",
  },
  gradient: {
    height: "100%",
    width: "100%",
  },
  overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
  },
  iconContainer: {
    alignSelf: "flex-end",
    padding: 10,
  },
  countryText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
