import React, {useState} from 'react';
import { StyleSheet, TextInput, View , Button, Modal} from 'react-native';
import {THEME} from "../theme";

export const EditModal = ({visible, setModal, currTodo, editTodo}) => {
  const [todoText, setTodoText] = useState(currTodo.title);
  const saveTodo = () => {
    editTodo(currTodo.id, todoText);
    setModal(null);
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.modal}>
        <TextInput value={todoText} onChangeText={setTodoText} transparent={false}/>
        <View style={styles.buttonBlock}>
        <Button title="Отменить" color={THEME.DANGER_COLOR} onPress={() => setModal(false)}/>
        <Button title="Сохранить" onPress={saveTodo}/>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    padding: 30
  },
  buttonBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30
  }
});
