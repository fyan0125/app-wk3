import React from 'react';
import { StyleSheet, Text, View, Image } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';

import BookScreen from '../screens/BookScreen';
import StackNav from './StackNav';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
      <Drawer.Navigator
        drawerContent={(props) => {
          return (
            <View style={{}}>
              <Image style={styles.img} source={require("../../assets/avatar.png")}/>
            </View>
          );
        }}
      >
        <Drawer.Screen name="Home" component={BookScreen} />
        <Drawer.Screen name="WishList" component={BookScreen} />
        <Drawer.Screen name="My books" component={BookScreen} />
        <Drawer.Screen name="Account" component={BookScreen} />
        <Drawer.Screen name="Setting" component={BookScreen} />
      </Drawer.Navigator>
    );
}

const styles = StyleSheet.create({
  img:{
    width: 48,
    height: 48,
  }
})
export default DrawerNavigator;