import React from "react";
import { View} from "react-native";
import PopularList from "../components/PopularList";
import Newest from "../components/NewestList";
import bookData from "../json/books.json";

const BookScreen = ({ navigation }) => {
  return (
    <View style={{flex: 1, 
      backgroundColor: '#fff',}}>
      <PopularList 
        list={bookData.popularList}
        navigation={navigation}
      />
      <Newest 
        list={bookData.newest}
        navigation={navigation}
      />
    </View>
  );
};

export default BookScreen;
