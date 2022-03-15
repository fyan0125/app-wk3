import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BookScreen from '../screens/BookScreen';
import DetailScreen from '../screens/DetailScreen.js';
import StackNavigator from './StackNav';
import TabNavigator from './TabNav';

const Navigation = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}



export default Navigation;