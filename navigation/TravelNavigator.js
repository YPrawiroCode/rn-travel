import React from "react";

import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from "../screens/HomeScreen";
import FlightListScreen from "../screens/FlightListScreen";
import DetailFlightScreen from "../screens/DetailFlightScreen";
import HotelScreen from "../screens/HotelScreen";
import TopNavigation from "./TopNavigation";

const BottomTab = createBottomTabNavigator();

const TravelNavigator = (props) => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        screenOptions={{
          tabBarStyle: [
            {
              position: 'absolute',
              bottom: 30,
              left: 20,
              right: 20,
              elevation: 3,
              backgroundColor: '#ffffff',
              borderRadius: 20,
              height: 60,
            }
          ],
          tabBarLabelStyle: {
            fontSize: 12,
          },
        }}
      >
        <BottomTab.Screen
          name="Home-"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={40} />
            ),
            headerTransparent: true,
            headerShadowVisible: false,
            // shadowColor: 'transparent',
            title: '',
            headerStyle: {
              // backgroundColor: 'transparent',
              // shadowColor: 'transparent',
              // opacity: '50%',
            }
          }}
        />
        <BottomTab.Screen
          name="Notifications"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Updates',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="bell" color={color} size={34} />
            ),
            tabBarBadge: 3,
          }}
        />
        <BottomTab.Screen
          name="Profile"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={43} />
            ),
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  )
}

const RootStack = createNativeStackNavigator();

const BottomTabNav = (props) => {
  return (
    // <NavigationContainer>
    <RootStack.Navigator initialRouteName="Home">
      {/* <BottomTab.Screen name="BottomTab" component={BottomTabNav} /> */}
      <RootStack.Screen
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
      <RootStack.Screen name="Hotel" component={HotelScreen} />
      <RootStack.Screen name="Flight" component={FlightListScreen} />
      <RootStack.Screen name="Gym" component={FlightListScreen} />
      <RootStack.Screen name="Laundry" component={FlightListScreen} />
      <RootStack.Screen name="Restaurant" component={FlightListScreen} />
      <RootStack.Screen name="Taxi" component={FlightListScreen} />
      <RootStack.Screen name="Train" component={FlightListScreen} />
      <RootStack.Screen name="Cafe" component={FlightListScreen} />
      <RootStack.Screen name="DetailFlight" component={DetailFlightScreen} />
    </RootStack.Navigator>
    // </NavigationContainer>
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
