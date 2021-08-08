import React from "react"
import {View, Text, StyleSheet, Image, TouchableWithoutFeedback } from "react-native"

const ProductCard = ({product, onSelect}) => {
  return(
    <TouchableWithoutFeedback onPress={onSelect} >
      <View style={styles.container} >
        <Image style={styles.image} source={{uri: product.image}} />
        <View style={styles.bodyContainer}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.price}>{product.price}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e0e0e0",
    borderWidth: 1,
    borderColor: "#bdbdbd",
    margin: 10,
    flexDirection: "row"
  },
  image: {
    width: 100,
    minHeight: 100,
    resizeMode: "contain",
    backgroundColor: "white"
  },
  bodyContainer: {
    flex: 1,
    padding: 5,
    justifyContent: "space-between"
  },
  title: {
    fontWeight: "bold",
    fontSize: 18
  },
  price: {
    textAlign: "right",
    fontSize: 16,
    fontStyle: "italic"
  }
})