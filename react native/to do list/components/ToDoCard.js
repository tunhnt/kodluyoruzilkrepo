import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';

export default function ToDoCard({ item, longPress }) {

   const [backgroundColor, setBackgroundColor] = useState("#7ea552");
   const [line, setLine] = useState("");

   const changeBackground = () => {
     if(backgroundColor == "#7ea552"){
       setBackgroundColor("#37474f")
       setLine("line-through")
     } else {
       setBackgroundColor("#7ea552")
       setLine("none")
     }
   }

  return (
    <TouchableOpacity onLongPress={() => longPress(item.key)} onPress={changeBackground} style={[styles.container, { backgroundColor: backgroundColor,}]} >
      <Text style={[styles.text, {textDecorationLine: line }]} >{item.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 3,
    padding: 10,
    marginVertical: 3
    
  },
  text: {
    color: "white",
    textDecorationLine: "line-through"
  }
});
