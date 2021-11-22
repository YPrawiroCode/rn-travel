import React from "react";

import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Image } from 'react-native'
import HomeScreen from "../screens/HomeScreen";
import FlightListScreen from "../screens/FlightListScreen";
import DetailFlightScreen from "../screens/DetailFlightScreen";
import HotelScreen from "../screens/HotelScreen";
import TopNavigation from "./TopNavigation";

const Stack = createNativeStackNavigator();

const TravelNavigator = (props) => { 
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTransparent: true,
            headerShadowVisible: false,
            // shadowColor: 'transparent',
            title: '',
            headerStyle: {
              // backgroundColor: 'transparent',
              // shadowColor: 'transparent',
              // opacity: '50%',
            },
            // headerTitle: (props) => <TopNavigation {...props} />
          }}
        />
        <Stack.Screen name="Hotel" component={HotelScreen} />
        <Stack.Screen name="Flight" component={FlightListScreen} />
        <Stack.Screen name="Gym" component={FlightListScreen} />
        <Stack.Screen name="Laundry" component={FlightListScreen} />
        <Stack.Screen name="Restaurant" component={FlightListScreen} />
        <Stack.Screen name="Taxi" component={FlightListScreen} />
        <Stack.Screen name="Train" component={FlightListScreen} />
        <Stack.Screen name="Cafe" component={FlightListScreen} />
        <Stack.Screen name="DetailFlight" component={DetailFlightScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  bannerContainer: {
    marginTop: -1000,
    paddingTop: 1000,
    alignItems: 'center',
    overflow: 'hidden',
  },
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150
  },
  bgImage: scrollA => ({
    resizeMode: "cover",
    height: 250,
    width: '200%',
    transform: [
      {
        translateY: scrollA.interpolate({
          inputRange: [-250, 0, 250, 250 + 1],
          outputRange: [-250 / 2, 0, 250 * 0.75, 250 * 0.75],
        }),
      },
      {
        scale: scrollA.interpolate({
          inputRange: [-250, 0, 250, 250 + 1],
          outputRange: [2, 1, 0.5, 0.5],
        }),
      },
    ],
  }),
  bgContainer: {
    position: 'absolute',
    alignSelf: 'center',
    top: "30%",
    width: "90%",

  }
});

export default TravelNavigator;
