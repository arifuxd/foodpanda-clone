import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";
import Antdesign from "react-native-vector-icons/AntDesign";
import { render } from "react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod";
const SearchBar = () => {
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        styles={{
          textInput: {
            backgroundColor: "#eee",
            borderRadius: 20,
            fontWeight: "700",
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: "#eee",
            borderRadius: 50,
            flexDirection: "row",
            alignItems: "center",
          },
        }}
        renderLeftButton={() => (
          <View>
            <Ionicons name="location-sharp" size={24} />
          </View>
        )}
        renderRightButton={() => (
          <View
            style={{
              flexDirection: "row",
              marginRight: 8,
              alignItems: "center",
              padding: 9,
              borderRadius: 30,
              backgroundColor: "white",
            }}
          >
            <Antdesign
              size={11}
              style={{ marginRight: 6 }}
              name="clockcircle"
            />
            <Text>Search</Text>
          </View>
        )}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flexDirection: "row",
  },
});
