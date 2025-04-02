import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  ImageProps,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons, AntDesign, FontAwesome } from "@expo/vector-icons";

const { width } = Dimensions.get("screen");

type Item = {
  destination: string;
  country: string;
  image: ImageProps;
  reviews: number;
  ratings: number;
};

const Card: React.FC<Item> = ({
  destination,
  country,
  image,
  reviews,
  ratings,
}) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.8)"]}
          style={styles.gradient}
        >
          <View style={styles.iconContainer}>
            <TouchableOpacity>
              <MaterialIcons name="favorite-outline" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
          <View style={styles.details}>
            <Text style={styles.country}>{country}</Text>
            <Text style={styles.destination}>{destination}</Text>
            <View style={styles.reviewContainer}>
              <View style={styles.reviewItem}>
                <FontAwesome name="comment" size={14} color="#fff" />
                <Text style={styles.reviews}>{reviews} Reviews</Text>
              </View>
              <View style={styles.reviewItem}>
                <AntDesign name="star" size={14} color="#ffd700" />
                <Text style={styles.ratings}>{ratings} Ratings</Text>
              </View>
            </View>
            <View style={styles.blurView}>
              <TouchableOpacity style={styles.seeMoreButton}>
                <Text style={styles.seeMoreText}>See More</Text>
                <AntDesign name="arrowright" size={16} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffeedd",
    width: width - 80, // Adjusted width
    flex: 1,
    marginHorizontal: 10, // Adjusted margin
    borderRadius: 32,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    paddingVertical: 16,
  },
  iconContainer: {
    position: "absolute",
    top: 16,
    right: 16,
    padding: 8,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 16,
  },
  details: {
    padding: 16,
    alignItems: "flex-start",
  },
  destination: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 4,
  },
  country: {
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.7)",
    marginBottom: 8,
  },
  reviewContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 16,
  },
  reviewItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  reviews: {
    fontSize: 14,
    color: "#fff",
    marginLeft: 4,
  },
  ratings: {
    fontSize: 14,
    color: "#fff",
    marginLeft: 4,
  },
  blurView: {
    width: "100%",
    borderRadius: 24,
    overflow: "hidden",
    backgroundColor: "rgba(1, 1, 1, 0.5)",
    backdropFilter: "blur(10px)",
  },
  seeMoreButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    width: "100%",
  },
  seeMoreText: {
    color: "#fff",
    fontSize: 14,
    marginRight: 8,
  },
});

export default Card;
