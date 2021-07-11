import * as React from 'react';
import { Dimensions, Image, Text, View, StyleSheet, FlatList } from 'react-native';

export default function NewsCard({products}) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: products.imgURL}} />
      <View style={styles.innerContainer}>
        <Text style={styles.title} > {products.title} </Text>
        <Text style={styles.price} >{products.price}</Text>
        <Text style={styles.stock} >{products.inStock ? "" : "STOKTA YOK"}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    margin: 10,
    borderRadius: 10,
    backgroundColor: "#eceff1",
    width: Dimensions.get('window').width/2.3,
    alignItems: "center",
  },

  image: {
    height: Dimensions.get('window').height/4,
    width: Dimensions.get('window').width/3,
    borderRadius: 10,
    marginTop: 10
  },

  innerContainer: {
    padding: 5,
    marginHorizontal: 10
  },
  title: {
    fontWeight: "bold",
    fontSize: 18
  },
  price: {
    fontStyle: "italic",
    fontSize: 14,
    color: "gray",
    fontWeight: "bold",
  },
  stock: {
    fontWeight: "bold",
    color: "red",

  }

});
