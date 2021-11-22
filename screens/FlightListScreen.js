import React from "react";

import { View, Button, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const FlightListScreen = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.screen}>
      <Text>FlightListScreen Screen</Text>
      <Button
        title="Go to DetailFlight"
        onPress={() => navigation.navigate("DetailFlight")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FlightListScreen;
