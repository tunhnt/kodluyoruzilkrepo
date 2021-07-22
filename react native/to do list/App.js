import  React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, FlatList} from 'react-native';
import Constants from 'expo-constants';

import CustomButton from "./components/ToDoButton";
import ToDoCard from "./components/ToDoCard";

export default function App() {

   const [list, setList] = useState([]);
   
   const [count, setCount] = useState(0)
  
   const renderToDo = (item) => <ToDoCard item={item} />


   const submitHandler = (text) => {
     setList((prevTodos) => {
       return [
         ...prevTodos,
         { text: text, key: Math.random().toString() }
         
       ]
     })

     setCount(count+1)
   
   }

   const longPress = (key) => {
     setList((prevTodos) => {
       return prevTodos.filter(todo => todo.key != key)
     })
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
            renderItem={({ item }) => (
              <ToDoCard item={item} longPress={longPress} />
            )}
            
          />
        </View>

        <CustomButton submitHandler= {submitHandler} />
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
