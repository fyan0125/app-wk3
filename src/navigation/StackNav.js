import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BookScreen from '../screens/BookScreen';
import DetailScreen from '../screens/DetailScreen.js';
import DrawerNav from './DrawerNav';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
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
          })}
        />
      </Stack.Navigator>
    );
  }

  export default StackNavigator;