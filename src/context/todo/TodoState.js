import React, {useReducer} from 'react';
import {TodoContext} from './todoContext';
import {todoReducer} from "./todoReducer";
import {
  ADD_TODO,
  CLEAR_ERROR,
  FETCH_TODOS,
  HIDE_LOADER,
  REMOVE_TODO,
  SHOW_ERROR,
  SHOW_LOADER,
  UPDATE_TODO
} from "./types";

export const TodoState = ({children}) => {
  const initialState = {
    todos: [],
    loading: true,
    error: null
  };
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = async title => {
    const response = await fetch('https://rn-todo-app-5484f.firebaseio.com/todos.json', {
      method: "POST",
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({title})
    });
    const data = await response.json();
    dispatch({type: ADD_TODO, title, id: data.name});
  };

  const fetchTodos = async () => {
    showLoader();
    clearError();
    try {
      const response = await fetch('https://rn-todo-app-5484f.firebaseio.com/todos.json', {
        method: "GET",
        headers: {'Content-type': 'application/json'},
      });
      const data = await response.json();
      const todos = Object.keys(data).map(key => ({...data[key], id: key}));
      dispatch({type: FETCH_TODOS, todos});
    } catch (e) {
      showError('Что-то пошло не так...');
      console.log(e);
    } finally {
      hideLoader();
    }
  };

  const removeTodo = async id => {
    dispatch({type: REMOVE_TODO, id});
    await fetch(`https://rn-todo-app-5484f.firebaseio.com/todos/${id}.json`, {
      method: 'DELETE',
      headers: {'Content-type': 'application/json'},
    });
  };

  const updateTodo = async (id, title) => {
    dispatch({type: UPDATE_TODO, id, title});
    await fetch(`https://rn-todo-app-5484f.firebaseio.com/todos/${id}.json`, {
      method: 'PATCH',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({title})
    });
  };
 
  const showLoader = () => dispatch({type: SHOW_LOADER});
  const hideLoader = () => dispatch({type: HIDE_LOADER});
  const showError = (error) => dispatch({type: SHOW_ERROR, error});
  const clearError = () => dispatch({type: CLEAR_ERROR});

  return <TodoContext.Provider value={{
    todos: state.todos, loading: state.loading, error: state.error,
    addTodo, removeTodo, updateTodo, fetchTodos
  }}>{children}</TodoContext.Provider>
};
