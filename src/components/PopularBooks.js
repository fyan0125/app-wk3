import React from "react";
import { StyleSheet, Text, View, Image, Pressable} from "react-native";

const PopularBooks = ({ book, navigation }) => {
  return (
      <View>
        <View>
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
        <View>
          <View>
            <Text style={styles.h2}>{book.title}</Text>
            <Text style={styles.b2}>{book.author}</Text>
          </View>
        </View>
      </View>
  )};

const styles = StyleSheet.create({
  imageStyle: {
    height: 200,
    width: 140
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

export default PopularBooks;
