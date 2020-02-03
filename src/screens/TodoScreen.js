import React, {useContext, useState} from 'react';
import {Button, StyleSheet, Text, View, Dimensions} from 'react-native';
import {THEME} from "../theme";
import {AppCard} from "../components/AppCard";
import {EditModal} from "../components/EditModal";
import {AppButton} from "../components/ui/AppButton";
import {FontAwesome5} from "@expo/vector-icons";
import {ScreenContext} from "../context/screen/screenContext";
import {TodoContext} from "../context/todo/todoContext";

export const TodoScreen = () => {
  let {currTodo, setCurrTodo} = useContext(ScreenContext);
  currTodo = currTodo && currTodo.data;
  const {removeTodo, updateTodo} = useContext(TodoContext);
  const [modal, setModal] = useState(false);
  const onRemove = () => {
    removeTodo(currTodo.id);
    setCurrTodo(null);
  };

  const onBack = () => {
    setCurrTodo(null);
  };

  return (
    <View>
      <EditModal visible={modal} setModal={setModal} currTodo={currTodo} editTodo={updateTodo}/>
      <AppCard>
        <Text style={styles.text}>{currTodo.title}</Text>
        <AppButton style={styles.editButton} onPress={() => setModal(true)}>
          <FontAwesome5 name="edit" size={20}/>
        </AppButton>
      </AppCard>
      <View style={styles.buttonBlock}>
        <View style={styles.backButton}>
          <AppButton color={THEME.GRAY_COLOR} onPress={onBack}>
            Назад
          </AppButton>
        </View>
        <View style={styles.backButton}>
          <AppButton color={THEME.DANGER_COLOR} onPress={onRemove}>
            Удалить
          </AppButton>
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
    flexBasis: Dimensions.get('window').width / 3
  },
  editButton: {

  }
});
