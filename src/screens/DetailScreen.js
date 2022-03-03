import React from 'react';
import { StyleSheet, ScrollView, Text, View, Image, Button, Linking } from 'react-native';

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
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: image
          }}
        />
        <Text style={styles.bodyText}>{title}</Text>
        <Text>{author}</Text>
        <Text>
          <Text>{score}</Text>
          /5.0
        </Text>
        <Text>{description}</Text>
        <Button 
          onPress={() => Linking.openURL(url)}
          title="BUY NOW FOR $"
        />  
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
  },
  bodyText:{
    fontSize: 14,
  }
});

export default DetailScreen;
