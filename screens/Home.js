import { StyleSheet, Text, View, StatusBar } from "react-native";
import React from "react";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight + 10,
    backgroundColor: "#eee",
    // flex: 1,
  },
});
