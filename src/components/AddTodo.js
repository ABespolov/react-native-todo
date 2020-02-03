import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Button, Alert, Keyboard} from 'react-native';
import {AntDesign} from "@expo/vector-icons";
import {THEME} from "../theme";

export const AddTodo = ({addTodo}) => {
  const [text, setText] = useState('');
  const handleClick = () => {
    if (text.trim()) {
      addTodo(text);
      setText('');
      Keyboard.dismiss();
    } else {
      Alert.alert('Название задачи не может быть пустым');
    }
  };

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        autoCorrect={false}
        autoCapitalize='none'
        //keyboardType="number-pad"
      />
      <View style={styles.button}>
        <AntDesign.Button onPress={handleClick} name='pluscircleo'>
          Добавить
        </AntDesign.Button>
        {/*<Button title="Добавить" onPress={handleClick}/>*/}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 15,
  },
  input: {
    flexBasis: '60%',
    borderBottomWidth: 2,
    borderStyle: 'solid',
    borderBottomColor: THEME.MAIN_COLOR,
    padding: 10,
  },
  button: {
    marginLeft: 20,
    flexBasis: '40%',
  }
});
