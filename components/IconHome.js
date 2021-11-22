import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';
import { useNavigation } from '@react-navigation/native';


const IconHome = props => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity 
      style={styles.gridItem}
      onPress={() => {
        navigation.navigate(`${props.iconScreen}`)
      }}
    >
      <View>
        <Image style={styles.imgIcon} source={props.image} onPress/>
        <Text style= {styles.txtTitle}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 5,
    marginTop: 20,
    height: 70,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center'
  },
  txtTitle:{
    fontSize: 11,
    fontWeight: "bold",
    textAlign: "center"
  },
  imgIcon:{
    width:55,
    height:55
  }
});

export default IconHome;
