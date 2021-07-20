import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function SongCard(props) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: props.song.imageUrl}} />
      <View style={styles.innerContainer} >
        <Text style={styles.title} > {props.song.title} </Text>
        <View style={styles.contentContainer} >
          <View style={styles.infoContainer}>  
            <Text style={styles.artist}> {props.song.artist} </Text>
            <Text style={styles.year}> {props.song.year} </Text>
          </View>
          {props.song.isSoldOut && <View style={styles.soldoutContainer} >
            <Text style={styles.soldoutTitle}>TÜKENDİ</Text>
          </View>}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  innerContainer: {
    padding: 10,
    flex: 1,
    justifyContent: "center"
  },

  title: {
    fontWeight: "bold",
    fontSize: 27
  },

  infoContainer: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center"
  },
  year: {
    marginLeft: 10,
    color: "gray",
    fontWeight: "bold",
    fontSize: 12
  },

  soldoutContainer: {
    borderWidth: 1,
    borderColor: "red",
    padding: 5,
    borderRadius: 5
  },

  soldoutTitle: {
    color: "red",
    fontSize: 12
  },

  contentContainer: {
    flexDirection:  "row"
  }
});



















