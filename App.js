import React, {useState} from 'react';
import {StyleSheet, Text, View, Alert} from 'react-native';
import {Navbar} from './src/components/Navbar';
import {MainScreen} from './src/screens/MainScreen';
import {TodoScreen} from "./src/screens/TodoScreen";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [currTodo, setCurrTodo] = useState(null);

  const addTodo = (title) => {
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
      if(todo.id === id) {
        todo.title = title;
      }

      return todo;
    }));
  };

  return (
    <View style={styles.container}>
      <Navbar/>
      <View style={styles.appContainer}>
        {currTodo ?
          <TodoScreen currTodo={currTodo} setCurrTodo={setCurrTodo} removeTodo={removeTodo} editTodo={editTodo}/> :
          <MainScreen addTodo={addTodo} removeTodo={removeTodo} todos={todos} setCurrTodo={setCurrTodo}/>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 20
  }
});

/*<ScrollView>
  {todos.map(todo => <Todo key={todo.id} todo={todo}></Todo>)}
</ScrollView>*/
