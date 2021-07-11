import * as React from 'react';
import {Dimensions, Image, View, StyleSheet, ScrollView } from 'react-native';

import newsBannerData from "../news_banner_data.json"

export default function NewsBanner() {
  return(
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {
              newsBannerData.map(bannerNews => <Image  style={styles.bannerImage} source={{uri: bannerNews.imageUrl}} /> )
            }
    </ScrollView>    
  )

}

const styles = StyleSheet.create({
  bannerImage: {
    height: Dimensions.get('window').height/5,
      width: Dimensions.get('window').width/2,
  },

});