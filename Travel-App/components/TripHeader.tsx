// components/TripHeader.tsx
import { StyleSheet, View, Text, FlatList, Pressable } from "react-native";
import { country } from "@/constants/Countries";

type ItemProps = { id: string; name: string };
type TripHeaderProps = {
  active: string;
  setActive: (id: string) => void;
};

export default function TripHeader({ active, setActive }: TripHeaderProps) {
  const Item = ({ id, name }: ItemProps) => {
    return (
      <Pressable
        style={[
          styles.listItem,
          {
            backgroundColor: id === active ? "#212529" : "#ffff",
            marginLeft: id === "1" ? 22 : 4,
          },
        ]}
        onPress={() => setActive(id)}
      >
        <Text
          style={{
            fontFamily: "InstrumentSans-Medium",
            fontWeight: "500",
            color: id === active ? "#ffff" : "black",
            textAlignVertical: "center",
            fontSize: 14, // Added to make text slightly smaller
          }}
        >
          {name}
        </Text>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select your next trip</Text>
      <FlatList
        data={country}
        renderItem={({ item }) => <Item name={item.name} id={item.id} />}
        keyExtractor={(Item) => Item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingVertical: 14 }} // Reduced padding
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "15%", // Reduced from 18%
    alignItems: "flex-start",
    justifyContent: "space-evenly",
  },
  title: {
    fontSize: 26,
    fontFamily: "Montserrat-SemiBold",
    paddingHorizontal: 22,
  },
  listItem: {
    backgroundColor: "#fff",
    padding: 8, // Reduced from 8
    paddingHorizontal: 16, // Reduced from 16
    marginHorizontal: 8, // Reduced from 8
    borderRadius: 14, // Slightly reduced from 14
    elevation: 3, // Reduced from 5 for a more subtle shadow
  },
});
