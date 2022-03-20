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
                options={{
                    tabBarIcon: ({ focused }) => (
                        focused
                        ?<Image 
                        style={styles.bt}
                        source={{uri: 'https://i.pinimg.com/originals/89/d9/fe/89d9fe7f25e6b3126f10af3fa745916a.jpg'}}
                      />
                        :<Image 
                        style={styles.bt}
                        source={{uri: 'https://raw.githubusercontent.com/fyan0125/app-wk3/main/assets/icon_home.png'}}
                      />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen 
                name="WishList" 
                component={StackNav} 
                options={{
                    tabBarIcon: ({ focused }) => (
                        focused
                        ?<Image 
                        style={styles.bt}
                        source={{uri: 'https://i.pinimg.com/originals/a8/7b/ed/a87beda7accefd41ac4345785995c7ff.jpg'}}
                      />
                        :<Image 
                        style={styles.bt}
                        source={{uri: 'https://i.pinimg.com/originals/10/bc/57/10bc578785427c5c14e76517943cc58c.jpg'}}
                      />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen 
                name="My books" 
                component={StackNav} 
                options={{
                    tabBarIcon: ({ focused }) => (
                        focused
                        ?<Image 
                        style={styles.bt}
                        source={{uri: 'https://i.pinimg.com/originals/22/a9/0b/22a90b27fa627114f8cc7634e2bcf606.jpg'}}
                      />
                        :<Image 
                        style={styles.bt}
                        source={{uri: 'https://i.pinimg.com/originals/41/cd/8f/41cd8f16d32e2f186ae0bc80890b25f7.jpg'}}
                      />
                    ),
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    bt:{
        width: 24,
        height: 24,
    }
})
export default TabNavigator;