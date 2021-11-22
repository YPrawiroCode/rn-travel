import React from "react";

import { View, Button, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const DetailFlightScreen = (props) => {
    const navigation = useNavigation();
  return (
    <View style={styles.screen}>
      <Text>DetailFlightScreen Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { 
    flex: 1, 
    alignItems: "center", 
    justifyContent: "center" 
  }
});

export default DetailFlightScreen;