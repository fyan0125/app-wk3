import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity, StyleSheet, Image, Text } from 'react-native';
import { DrawerActions } from '@react-navigation/native';

import DetailScreen from '../screens/DetailScreen.js';
import DrawerNav from './DrawerNav';
import BookScreen from '../screens/BookScreen'

const Stack = createNativeStackNavigator();

const StackNavigator = ({ navigation: { goBack }, navigation, props }) => {
  const[alternateImage, setAlternateImage] = useState(true);

  const changeImage = () => {
    setAlternateImage(alternateImage => !alternateImage);
  }

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer())
    navigation.setOptions({headerShown: false,});
  };

    return (
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0
          },
        }}
      >
        <Stack.Screen
          name=" "
          component={BookScreen}
          options={{
            headerLeft: () => (
              <TouchableOpacity onPress={openDrawer}>
                <Image style={styles.bt}source={{uri: 'https://i.pinimg.com/originals/1d/1a/5a/1d1a5ab6fd6af60701b134c45933b271.jpg'}}/>
              </TouchableOpacity>           
            ), 
            headerRight: () => (
              <TouchableOpacity onPress={changeImage}>
                <Image style={styles.bt}source={{uri: 'https://i.pinimg.com/originals/c2/6d/57/c26d57787396e5c09fa47f1b3ac6c817.jpg'}}/>
              </TouchableOpacity>
            ),
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={({ route }) => ({
            title: "",
            headerLeft: () => (
              <TouchableOpacity
                 style={styles.headerBtnContainer}
                 onPress={() => goBack()}
              >
                <Image style={styles.bt}source={{uri: 'https://i.pinimg.com/originals/78/7c/97/787c97aaff1d80ec78967e4db5b97906.jpg'}}/>
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity
                 onPress={changeImage}
              >
                {alternateImage && <Image style={styles.bt} source={{uri: 'https://i.pinimg.com/originals/70/8b/19/708b19ced0ff15ae1f89cd1017f824ec.jpg'}}/>}
                {!alternateImage && <Image style={styles.bt} source={{uri: 'https://i.pinimg.com/originals/a8/7b/ed/a87beda7accefd41ac4345785995c7ff.jpg'}}/>}
              </TouchableOpacity>
            ),
            headerShadowVisible: false
          })}
        />
      </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
  bt:{
    width: 24,
    height: 24,
  }
})

export default StackNavigator;