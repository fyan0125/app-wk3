import React from "react";
import { FlatList, View, StyleSheet, Text } from "react-native";
import Newest from "./NewestBook";

const NewestList = ({ list, navigation }) => {
  const renderItem = ({ item }) => <Newest book={item} navigation={navigation} />;
  return (
    <View>
      <Text style={styles.h1}>Newest</Text>
      <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={item => item.title}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.content}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  content:{
    paddingLeft: 20,
  },
  h1:{
    fontSize: 24,
    lineHeight: 28,
    fontWeight: '500',
    letterSpacing: 0.3,
    marginLeft: 20,
    marginTop: 16,
    marginBottom: 16,
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