import React, { useRef } from "react";

import { View, ScrollView, Image, Button, Text, StyleSheet, FlatList, Animated } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { ICON } from "../data/dummy-data";

import Card from '../../rn-travel/components/Card';
import TopNavigation from "../navigation/TopNavigation";
import IconHome from "../components/IconHome";

const HomeScreen = (props) => {
  const navigation = useNavigation();
  const renderGridItem = (itemData) => {
    return (
      <IconHome
        image={itemData.item.uri}
        title={itemData.item.name}
        iconScreen={itemData.item.name}
      />
    )
  }

  const scrollA = useRef(new Animated.Value(0)).current;

  return (
    <View>
      <TopNavigation scrollA={scrollA} />
      <Animated.ScrollView
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollA } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      >
        <View>
          <View style={styles.bannerContainer}>
            <Animated.Image style={styles.bgImage(scrollA)} source={require('../assets/bg-airplane.jpg')} />
          </View>
          <Card style={styles.bgContainer}>
            <FlatList
              keyExtractor={(item, index) => item.id}
              data={ICON}
              renderItem={renderGridItem}
              numColumns={4}
            />
          </Card>


        </View>
        <Card style={styles.contentContainer}>

        </Card>
        <Text>Lorem ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

          Why do we use it?ls
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


          Where does it come from?
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
          Where does it come from?
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</Text>
      </Animated.ScrollView>
    </View>
  );
};

HomeScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Meal Categories",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  bannerContainer: {
    marginTop: -1000,
    paddingTop: 1000,
    alignItems: 'center',
    overflow: 'hidden',
  },
  contentContainer:{
    width:320,
    height:100,
    marginTop:180,
    marginLeft:20
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
    top: "70%",
    width: "90%",

  }
});

export default HomeScreen;
