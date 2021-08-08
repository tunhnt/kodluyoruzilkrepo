import React from "react"
import {View, Text, StyleSheet, FlatList, ActivityIndicator} from "react-native"

import ProductCard from "../components/ProductCard";
import useFetch from "../hooks/useFetch";
import Loading from "../components/Loading";
import Error from "../components/Error";

const URL = "https://fakestoreapi.com/products"

const Products = ({navigation}) => {
  
  const {loading, data, error} = useFetch(URL)

  const handleProductSelect = (id) => {
    navigation.navigate("DetailPage", {id})
  }

  const renderProduct =({item}) => <ProductCard product={item} onSelect={() => handleProductSelect(item.id)} /> ;

  if(loading) {
    return <Loading />
  }

  if(error){
    return <Error />
  }
 
  return (
    <View style={styles.container} > 
      <FlatList
        data={data} renderItem={renderProduct}
      />
    </View>
  )
}

export default Products;

const styles = StyleSheet.create({
  container: {
   
  },

})