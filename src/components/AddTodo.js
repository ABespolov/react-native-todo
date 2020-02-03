import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';
import {THEME} from "../theme";

export const AddTodo = ({addTodo}) => {
  const [text, setText] = useState('');
  const handleClick = () => {
    if(text.trim()) {
      addTodo(text);
      setText('');
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
        <Button title="Добавить" onPress={handleClick}/>
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
    flex: 2,
    borderBottomWidth: 2,
    borderStyle: 'solid',
    borderBottomColor: THEME.MAIN_COLOR,
    padding: 10,
  },
  button: {
    flex: 1,
    marginLeft: 20
  }
});
