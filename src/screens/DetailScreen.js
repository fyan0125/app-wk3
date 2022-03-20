import React from 'react';
import { StyleSheet, ScrollView, Text, View, Image, Linking, Pressable } from 'react-native';

const DetailScreen = ({ route }) => {
  const { title, 
    author,
    price,
    score,
    url,
    image,
    description
  } = route.params;
  return (
    <ScrollView style={{backgroundColor:'#fff'}}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: image}}/>
        <Text style={[styles.h1, styles.title]}>{title}</Text>
        <Text style={[styles.b1, styles.gray, styles.title]}>{author}</Text>
        <Text style={[styles.b1, styles.gray, styles.rate]}>
          {
            score  === "4.0"
            ?<Image style={styles.rateImg} source={{uri: 'https://i.pinimg.com/originals/8d/5a/06/8d5a06e06c6d6f0c725b961fcedc1cb2.jpg'}}/>
            :<Image style={styles.rateImg} source={{uri: 'https://i.pinimg.com/originals/ff/14/83/ff1483341a2080c41259014e30a004e2.jpg'}}/>
          }
          <Text style={{color:'#000'}}>  {score} </Text>
          / 5.0
        </Text>
        <Text style={[styles.b1, styles.des]}>{description}</Text>
        <Pressable
          onPress={() => Linking.openURL(url)}
          style={styles.bt}
        >
            <Text style={[styles.btText]}>BUY NOW FOR ${price}</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 300,
    width: 210,
    marginTop: 8,
    marginBottom: 26,
  },
  title:{
    marginBottom: 8,
  },
  rate:{
    marginBottom: 16,
    width: 147,
    justifyContent: 'space-between',
  },
  rateImg:{
    width: 86,
    height:14,
  },
  des:{
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 28,
  },
  bt: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 4,
    backgroundColor: '#6200EE',
  },
  btText:{
    fontSize: 14,
    lineHeight: 16,
    fontWeight: '500',
    color: 'white',
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

export default DetailScreen;
