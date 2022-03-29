import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const HeaderTabs = () => {
  const [activeTab, setActiveTab] = useState("Delivery");
  return (
    <View style={styles.container}>
      <HeaderButton
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        text="Delivery"
      />
      <HeaderButton
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        text="Pickup"
      />
    </View>
  );
};

const HeaderButton = ({ text, activeTab, setActiveTab }) => {
  return (
    <View>
      <TouchableOpacity
        style={{
          backgroundColor: activeTab === text ? "black" : "white",
          paddingVertical: 6,
          paddingHorizontal: 16,
          borderRadius: 30,
        }}
        onPress={() => setActiveTab(text)}
      >
        <Text
          style={{
            color: activeTab === text ? "white" : "black",
            fontSize: 15,
            fontWeight: "700",
          }}
        >
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default HeaderTabs;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
  },
});
