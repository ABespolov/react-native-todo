import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {AppTextBold} from "./ui/AppTextBold";

export const Todo = ({todo, removeTodo, setCurrTodo}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => setCurrTodo(todo)}
      onLongPress={removeTodo.bind(this, todo.id)}
    >
      <View style={styles.todo}>
        <AppTextBold>{todo.title}</AppTextBold>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todo: {
    padding: 10,
    borderWidth: 2,
    borderColor: '#eee',
    borderRadius: 5,
    marginTop: 10
  }
});
