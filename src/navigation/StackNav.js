import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity, StyleSheet, Image } from 'react-native';

import DetailScreen from '../screens/DetailScreen.js';
import DrawerNav from './DrawerNav';

const Stack = createNativeStackNavigator();

const StackNavigator = ({ navigation: { goBack } }) => {
  const[alternateImage, setAlternateImage] = useState(true);

  const changeImage = () => {
    setAlternateImage(alternateImage => !alternateImage);
  }

    return (
      <Stack.Navigator>
        <Stack.Screen
          name=" "
          component={DrawerNav}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={({ route }) => ({
            title: "",
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: '400',
              fontSize: 20
            },
            headerBackTitle: '',
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
                 style={styles.headerBtnContainer}
                 onPress={changeImage}
              >
                {alternateImage && <Image style={styles.bt} source={{uri: 'https://i.pinimg.com/originals/70/8b/19/708b19ced0ff15ae1f89cd1017f824ec.jpg'}}/>}
                {!alternateImage && <Image style={styles.bt} source={{uri: 'https://i.pinimg.com/originals/a8/7b/ed/a87beda7accefd41ac4345785995c7ff.jpg'}}/>}
              </TouchableOpacity>
            ),
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