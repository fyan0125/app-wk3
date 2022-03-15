import React from 'react';
import { StyleSheet, Text, View, Image, Pressable} from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNav from './StackNav';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: '#6200ee',
                tabBarInactiveTintColor: 'gray',
                headerShown: false,
            })}
        >
            <Tab.Screen 
                name="Home" 
                component={StackNav}
            />
            <Tab.Screen name="WishList" component={StackNav} />
            <Tab.Screen name="My books" component={StackNav} />
        </Tab.Navigator>
    );
}
export default TabNavigator;