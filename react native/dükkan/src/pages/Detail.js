import React from "react"
import {View, Text, StyleSheet, Image, Dimensions} from "react-native"

import useFetch from "../hooks/useFetch";
import Error from "../components/Error";
import Loading from "../components/Loading";

const URL = "https://fakestoreapi.com/products"
const deviceSize = Dimensions.get("window")

const Detail = ({route}) => {

  const {id} = route.params;
  const {loading, error, data} = useFetch(`${URL}/${id}`);

  if(loading) {
    return <Loading />
  }

  if(error){
    return <Error />
  }

  return (
    <View style={styles.container} > 
      <Image source={{uri: data.image}} style={styles.image} />
      <View style= {styles.bodyContainer}>
        <Text style={styles.title} >{data.title}</Text>
        <Text style={styles.desc} >{data.description}</Text>
        <Text style={styles.price} >{data.price} TL</Text>
      </View>
    </View>
  )
}

export default Detail
 
const styles = StyleSheet.create({
  container: {
   flex: 1
  },
  image: {
    width: deviceSize.width,
    height: deviceSize.height / 3,
    resizeMode: "contain",
    backgroundColor: "white"
  },
  bodyContainer: {
    padding: 10
  },
  title: {
    fontWeight: "bold",
    fontSize: 25
  },
  desc: {
    fontStyle: "italic",
    marginVertical: 5
  },
  price: {
    fontWeight: "bold",
    fontSize: 22,
    textAlign: "right"
  }
})