import React, {useContext, useEffect} from 'react';
import {FlatList, StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import {AddTodo} from "../components/AddTodo";
import {Todo} from "../components/Todo";
import {THEME} from "../theme";
import {ScreenContext} from "../context/screen/screenContext";
import {TodoContext} from "../context/todo/todoContext";

export const MainScreen = () => {
  let {setCurrTodo} = useContext(ScreenContext);
  const {todos, addTodo, removeTodo} = useContext(TodoContext);

  const image = <View style={styles.imageWrap}>
    <Image style={styles.image} source={require('../../assets/content.png')}/>
  </View>;

  useEffect(() => {
    const update = () => {
      const width = Dimensions.get('window').width;
      //setDeviceWidth(width);
    };

    Dimensions.addEventListener('change', update);

    return () => {
      Dimensions.removeEventListener('change', update);
    }
  }, []);

  return (
    <View style={styles.appContainer}>
      <AddTodo addTodo={addTodo}/>

      {todos.length ? <FlatList
        keyExtractor={item => item.id}
        data={todos}
        renderItem={({item}) => <Todo todo={item} removeTodo={removeTodo} setCurrTodo={setCurrTodo}/>}/>
        : image}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  appContainer: {
    padding: 20,
  },
  imageWrap: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: '30%',
    paddingBottom: '40%'
  },
  image: {
    width: "100%",
    resizeMode: 'contain'
  }
});