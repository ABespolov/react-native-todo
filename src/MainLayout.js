import React, {useState, useContext} from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import {Navbar} from "./components/Navbar";
import {TodoScreen} from "./screens/TodoScreen";
import {MainScreen} from "./screens/MainScreen";
import {ScreenContext} from "./context/screen/screenContext";

export const MainLayout = (props) => {
  let {currTodo} = useContext(ScreenContext);
  currTodo = currTodo && currTodo.data;

  return (
    <View style={styles.wrapper}>
      <Navbar/>
      <View style={styles.appContainer}>
        {currTodo ? <TodoScreen/> : <MainScreen/>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    padding: 20,
    flex: 1
  },
  wrapper: {
    flex: 1
  }
});

/*const addTodo = (title) => {
    setTodos((prevTodos) => [...prevTodos, {id: Date.now().toString(), title: title}]);
  };
  const removeTodo = (id) => {
    Alert.alert('Удаление элемента', 'Вы уверены, что хотит удалить заметку?',
      [{
        text: 'Cancel',
        style: 'cancel'
      },
        {
          text: 'Delete',
          onPress: () => {
            setCurrTodo(null);
            setTodos((prev) => prev.filter(todo => todo.id !== id));
          }
        }],
      {canceled: false}
    );
  };
  const editTodo = (id, title) => {
    setTodos(prevTodos => prevTodos.map(todo => {
      if (todo.id === id) {
        todo.title = title;
      }

      return todo;
    }));
  };*/