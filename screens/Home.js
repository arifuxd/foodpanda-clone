import { StyleSheet, Text, View, StatusBar } from "react-native";
import React from "react";
import HeaderTabs from "../components/HeaderTabs";

const Home = () => {
  return (
    <View style={styles.container}>
      <HeaderTabs />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight + 10,
  },
});
