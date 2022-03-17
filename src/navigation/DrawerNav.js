import React from 'react';
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import BookScreen from '../screens/BookScreen';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <Image
        style={styles.img}
        source={{uri: 'https://i.pinimg.com/originals/2b/60/9e/2b609e5dbded273cf5c7303e9adbb968.jpg'}}
      />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const DrawerNavigator = ({navigation}) => {
    return (
      <Drawer.Navigator
        drawerContent={props => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen
          name="Home"
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
        <Drawer.Screen 
          name="WishList" 
          component={BookScreen} 
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
          component={BookScreen} 
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
  },
  bt:{
    width: 24,
    height: 24,
  }
})
export default DrawerNavigator;