import React from "react";
import { FlatList, View, StyleSheet, Text } from "react-native";
import Popular from "./PopularBooks";

const NewestList = ({ list, navigation }) => {
  const renderItem = ({ item }) => <Popular book={item} navigation={navigation} />;
  return (
    <View>
      <Text style={styles.h1}>Newest</Text>
      <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={item => item.title}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    paddingVertical: 8,
  },
  h1:{
    fontSize: 24,
    lineHeight: 28,
    fontWeight: '500',
    letterSpacing: 0.3,
  },
  h2:{
    fontSize: 16,
    lineHeight: 18,
    fontWeight: '500',
    letterSpacing: 0.012,
  },
  b1:{
    fontSize: 14,
    lineHeight: 16,
    fontWeight: '400',
    letterSpacing: 0.012,
  },
  b2:{
    fontSize: 12,
    lineHeight: 14,
    fontWeight: '400',
  },
  gray:{
    color: '#666666',
  }
});
export default NewestList;