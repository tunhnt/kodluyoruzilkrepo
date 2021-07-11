import * as React from 'react';
import { Dimensions, Image, Text, View, StyleSheet, FlatList } from 'react-native';


export default function NewsCard({news}) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: news.imageUrl}} />
      <View style={styles.innerContainer}>
        <Text style={styles.title} > {news.title} </Text>
        <Text style={styles.description} >{news.description}</Text>
        <Text style={styles.author} >{news.author}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    margin: 10,
    borderRadius: 10
  },

  image: {
    height: Dimensions.get('window').height/4,
    borderTopLeftRadius: 10, borderTopRightRadius: 10
  },

  innerContainer: {
    padding: 5
  },
  title: {
    fontWeight: "bold",
    fontSize: 18
  },
  description: {
    marginTop: 3
  },
  author: {
    fontStyle: "italic",
    textAlign: "right",
    fontSize: 10,
    color: "gray"
  }

});
