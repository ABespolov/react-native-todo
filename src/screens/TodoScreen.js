import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {THEME} from "../theme";
import {AppCard} from "../components/AppCard";
import {EditModal} from "../components/EditModal";

export const TodoScreen = ({currTodo, setCurrTodo, removeTodo, editTodo}) => {
  const [modal, setModal] = useState(false);

  const onRemove = () => {
    removeTodo(currTodo.id);
  };

  const onBack = () => {
    setCurrTodo(null);
  };

  return (
    <View>
      <EditModal visible={modal} setModal={setModal} currTodo={currTodo} editTodo={editTodo}/>
      <AppCard>
        <Text style={styles.text}>{currTodo.title}</Text>
        <Button style={styles.editButton} title="Редактировать" onPress={() => setModal(true)}/>
      </AppCard>
      <View style={styles.buttonBlock}>
        <View style={styles.backButton}>
          <Button title="Назад" color={THEME.GRAY_COLOR} onPress={onBack}/>
        </View>
        <View style={styles.backButton}>
          <Button title="Удалить" color={THEME.DANGER_COLOR} onPress={onRemove}/>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonBlock: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30
  },
  text: {
    fontSize: 16,
    marginBottom: 15
  },
  backButton: {
    flexBasis: '33%'
  },
  editButton: {
  }
});
