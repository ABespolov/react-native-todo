import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {AddTodo} from "../components/AddTodo";
import {Todo} from "../components/Todo";

export const MainScreen = ({addTodo, removeTodo, todos, setCurrTodo}) => {
  return (
    <View style={styles.appContainer}>
      <AddTodo addTodo={addTodo}/>

      <FlatList
        keyExtractor={item => item.id}
        data={todos}
        renderItem={({item}) => <Todo todo={item} removeTodo={removeTodo} setCurrTodo={setCurrTodo}/>}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  appContainer: {
    padding: 20,
  }
});