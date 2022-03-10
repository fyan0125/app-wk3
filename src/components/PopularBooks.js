import React from "react";
import { StyleSheet, Text, View, Image, Pressable} from "react-native";

const PopularBooks = ({ book, navigation }) => {
  return (
      <View style={styles.cardContainerStyle}>
        <View style={styles.cardSectionStyle}>
          <Pressable 
            onPress={() => navigation.navigate('Detail', book)}
          >
            <Image
              style={styles.imageStyle}
              source={{
                uri: book.image
              }}
            />
          </Pressable>
        </View>   
        <View style={[styles.cardSectionStyle]}>
          <View style={styles.headerContentStyle}>
            <Text>{book.title}</Text>
            <Text>{book.author}</Text>
          </View>
        </View>
      </View>
  )};

const styles = StyleSheet.create({
  imageStyle: {
    height: 200,
    width: 140
  }
});

export default PopularBooks;
