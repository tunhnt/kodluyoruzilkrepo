import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, TextInput, FlatList } from 'react-native';
import Constants from 'expo-constants';

import cardData from "./src/urunler_data.json";
import ProductsCard from "./src/components/ProductsCard"

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText} >PATIKASTORE</Text>
      
      <FlatList
        ListHeaderComponent={() => (
           <View style={styles.search} >
            <TextInput placeholder="Ara..."/>
          </View>
        )}

        data= {cardData}
        numColumns={2}
        renderItem={({item}) => <ProductsCard products={item}/>}

      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    paddingTop: Constants.statusBarHeight,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#800080",

  },
  search: {
    marginTop: 7,
    padding: 8,
    borderRadius: 10,
    backgroundColor: "#eceff1"

  }
});
