import React, {useState} from 'react';
import { Text, View, StyleSheet, SafeAreaView,Switch, FlatList } from 'react-native';
import Constants from 'expo-constants';

const data = [
  {id: 0, name: "cafe.exe", isFavorite: true},
  {id: 1, name: "KafeKafe", isFavorite: false},
  {id: 2, name: "Bugg", isFavorite: false},
  {id: 3, name: "Rock", isFavorite: true},
  {id: 4, name: "drink", isFavorite: false},
  {id: 5, name: "Sturbucks", isFavorite: false},
]


export default function App() {

  const [cafeList, setCafeList] = useState(data);
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

  function onFavoritesChange(isFavoriteSelected) {
    setShowOnlyFavorites(isFavoriteSelected);
    isFavoriteSelected ? setCafeList(cafeList.filter(cafe => cafe.isFavorite)) : setCafeList(data);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{margin: 10, flexDirection: "row"}} >
        <Text>show favorites</Text>
        <Switch  value={showOnlyFavorites} onValueChange={onFavoritesChange} />
      </View>
      <FlatList 
        data={cafeList}
        renderItem={({item}) => <Text style={{fontSize: 30}}>{item.name}</Text>}
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
  
});
