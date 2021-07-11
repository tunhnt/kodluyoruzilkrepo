import * as React from 'react';
import {Dimensions, Image, SafeAreaView,Text, View, StyleSheet, FlatList, ScrollView } from 'react-native';
import newsData from "./src/news_data.json"
import newsBannerData from "./src/news_banner_data.json"
import NewsCard from "./src/components/NewsCard"
import NewsBanner from "./src/components/NewsBanner"

export default function App() {
  const renderNews = ({item}) => <NewsCard news={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText} >News</Text>
      <FlatList
        ListHeaderComponent={() => (
          <NewsBanner />  
        )}
        data= {newsData}
        renderItem={renderNews}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eceff1"
  },

  bannerImage: {
    height: Dimensions.get('window').height/5,
      width: Dimensions.get('window').width/2,
  },

  headerText: {
    fontWeight: "bold",
    fontSize: 50,
    padding: 5
    
  }

});
