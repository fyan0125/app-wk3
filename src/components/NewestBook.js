import React from "react";
import { StyleSheet, Text, View, Image, Pressable} from "react-native";

const NewestBooks = ({ book, navigation }) => {
  return (
      <View style={styles.container}>
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
            <View style={styles.rate}>
            {
              book.score  === "4.0"
              ?<Image
                style={styles.rateImg}
                source={{
                  uri: 'https://i.pinimg.com/originals/8d/5a/06/8d5a06e06c6d6f0c725b961fcedc1cb2.jpg'
                }}
                />
              :<Image
                style={styles.rateImg}
                source={{
                  uri: 'https://i.pinimg.com/originals/ff/14/83/ff1483341a2080c41259014e30a004e2.jpg'
                }}
            />
            }
            </View>
            <Text style={styles.h2}>{book.title}</Text>
            <Text style={[styles.b2, styles.gray]}>{book.author}</Text>
          </View>
        </View>
      </View>
  )};

const styles = StyleSheet.create({
  container:{
    paddingRight: 16,
  },
  imageStyle: {
    height: 200,
    width: 140
  },
  rate:{
    marginTop: 16,
  },
  rateImg:{
    width: 86,
    height: 14,
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
    marginTop: 8,
    marginBottom: 8,
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

export default NewestBooks;
