import React from "react";
import { FlatList } from "react-native";
import Popular from "./PopularBooks";

const BookList = ({ list, navigation }) => {
  const renderItem = ({ item }) => <Popular book={item} navigation={navigation} />;
  return (
    <FlatList
      data={list}
      renderItem={renderItem}
      keyExtractor={item => item.title}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    />    
  );  
}

export default BookList;

