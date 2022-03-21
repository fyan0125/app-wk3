import React from 'react';
import { StyleSheet, TouchableOpacity, Image, Text, View } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import BookScreen from '../screens/BookScreen';
import StackNav from './StackNav';
import WishList from '../screens/WishList';
import MyBooks from '../screens/MyBooks';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}
      contentContainerStyle={{ paddingTop: 24 }}
    >
      <Image
        style={styles.img}
        source={{uri: 'https://i.pinimg.com/originals/2b/60/9e/2b609e5dbded273cf5c7303e9adbb968.jpg'}}
      />
      <Text style={[styles.userName, styles.h1]}>May</Text>
      <View
        style={{
          borderBottomColor: '#EDEDEF',
          borderBottomWidth: 1,
        }}
      />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const DrawerNavigator = ({navigation}) => {
    return (
      <Drawer.Navigator
        screenOptions={{
          drawerActiveTintColor: '#000',
          headerShown: false,
        }}
        initialRouteName="Home"
        drawerContent={props => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen
          name="Home"
          component={StackNav}
          options={{
            drawerIcon: () => (
              <Image 
                style={styles.bt}
                source={{uri: 'https://raw.githubusercontent.com/fyan0125/app-wk3/main/assets/icon_home.png'}}
              />
            ),
          }}
        />
        <Drawer.Screen 
          name="WishList" 
          component={WishList} 
          options={{
            drawerIcon: () => (
              <Image 
                style={styles.bt}
                source={{uri: 'https://raw.githubusercontent.com/fyan0125/app-wk3/main/assets/icon_nav_bookmark.png'}}
              />
            ),
          }}
        />
        <Drawer.Screen 
          name="My books" 
          component={MyBooks} 
          options={{
            drawerIcon: () => (
              <Image 
                style={styles.bt}
                source={{uri: 'https://raw.githubusercontent.com/fyan0125/app-wk3/main/assets/icon_mybook.png'}}
              />
            ),
          }}
        />
        <Drawer.Screen 
          name="Account" 
          component={BookScreen} 
          options={{
            drawerIcon: () => (
              <Image 
                style={styles.bt}
                source={{uri: 'https://raw.githubusercontent.com/fyan0125/app-wk3/main/assets/icon_account.png'}}
              />
            ),
          }}
        />
        <Drawer.Screen 
          name="Setting" 
          component={BookScreen} 
          options={{
            drawerIcon: () => (
              <Image 
                style={styles.bt}
                source={{uri: 'https://raw.githubusercontent.com/fyan0125/app-wk3/main/assets/icon_home.png'}}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    );
}

const styles = StyleSheet.create({
  img:{
    width: 48,
    height: 48,
    marginLeft: 16,
    marginBottom: 16,
  },
  userName:{
    marginLeft: 16,
    marginBottom: 16,
  },
  bt:{
    width: 24,
    height: 24,
  },
  h1:{
    fontSize: 24,
    lineHeight: 28,
    fontWeight: '500',
    letterSpacing: 0.3,
  },
})
export default DrawerNavigator;