import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';

export default function ToDoButton({submitHandler}) {

  const [text, setText] = useState("")

  const changeHandler = (val) => {
    setText(val)
  }

  return (
    <View style={styles.container} >
      <TextInput
       style={styles.text}
        placeholder="Yapılacak..." 
         onChangeText = {changeHandler}
        />
      <View style={{borderTopWidth: 1, marginHorizontal: 8, borderColor: "#78909c"}} ></View>
      <TouchableOpacity style={styles.button} onPress={() => submitHandler(text)} >
        <Text style={styles.buttonText} >Ekle</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#37474f",
    borderRadius: 7
    
  },
  text: {
    padding: 8,
  },

  button: {
    flex: 1,
    backgroundColor: "#808080",
    padding: 8,
    margin: 16,
    borderRadius: 7,
    alignItems: "center"
  },
  buttonText: {
    color: "white",
    fontWeight: "bold"
  }
});
