import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import React from "react";

const Categories = () => {
  const items = [
    {
      id: 1,
      image: require("../assets/images/shopping-bag.png"),
      text: "Pick-up",
    },
    {
      id: 2,
      image: require("../assets/images/soft-drink.png"),
      text: "Soft Drinks",
    },
    {
      id: 3,
      image: require("../assets/images/bread.png"),
      text: "Bakery Items",
    },
    {
      id: 4,
      image: require("../assets/images/fast-food.png"),
      text: "Fast Foods",
    },
    { id: 5, image: require("../assets/images/deals.png"), text: "Deals" },
    {
      id: 6,
      image: require("../assets/images/coffee.png"),
      text: "Coffee & Tea",
    },
  ];
  return (
    <FlatList
      horizontal
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      data={items}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        return <Category item={item} />;
      }}
    />
  );
};

const Category = ({ item }) => {
  return (
    <View style={{ alignItems: "center", marginRight: 30 }}>
      <Image
        source={item.image}
        style={{ width: 50, height: 40, resizeMode: "contain" }}
      />
      <Text style={{ fontSize: 13, fontWeight: "bold" }}> {item.text} </Text>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({});
