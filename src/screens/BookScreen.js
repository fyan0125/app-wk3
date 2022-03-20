import React from "react";
import { ScrollView } from "react-native";
import PopularList from "../components/PopularList";
import Newest from "../components/NewestList";
import bookData from "../json/books.json";

const BookScreen = ({ navigation }) => {
  return (
    <ScrollView style={{flex: 1, 
      backgroundColor: '#fff',}}>
      <PopularList 
        list={bookData.popularList}
        navigation={navigation}
      />
      <Newest 
        list={bookData.newest}
        navigation={navigation}
      />
    </ScrollView>
  );
};

export default BookScreen;
