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
            fontSize: 16,
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
        contentContainerStyle={{ paddingVertical: 18 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "16%",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  title: {
    fontSize: 26,
    fontFamily: "Montserrat-SemiBold",
    paddingHorizontal: 22,
  },
  listItem: {
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    marginHorizontal: 8,
    borderRadius: 14,
    elevation: 3,
    alignItems: "center",
    justifyContent: "center",
    padding: 6,
  },
});
