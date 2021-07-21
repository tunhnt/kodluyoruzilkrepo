import  React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, FlatList} from 'react-native';
import Constants from 'expo-constants';

import CustomButton from "./components/ToDoButton";
import ToDoCard from "./components/ToDoCard";

export default function App() {

   const [list, setList] = useState([]);
   const [listenList, setListenList] = useState([]);
   const [count, setCount] = useState(0)
  
   const renderToDo = () => <ToDoCard text={list} />

   const  listenToDo = (text) => {
    setListenList(text)
   }

   const submitToDo = () => {
    setList(listenList)
    setCount(count+1)
   
   }

  return (
    <View style={styles.container}>
        <View style={styles.title} >
          <Text style={styles.titleText} >Yapılacaklar</Text>
          <Text style={styles.titleText} >{count}</Text>
        </View>

        <View  style= {{flex: 1}} > 
          <FlatList
            data={list}
            renderItem={renderToDo}
          />
        </View>

        <CustomButton onListen = {listenToDo} onSubmit= {submitToDo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#102027",
    padding: 8
  },
  title: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  titleText: {
    fontSize: 25,
    color: "#ffa500",
  }
});
