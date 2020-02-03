import React, {useReducer} from 'react';
import {ScreenContext} from './screenContext';
import {screenReducer} from "./screenReducer";
import {CHANGE_SCREEN} from "./types";

export const ScreenState = ({children}) => {
  const initialState = {
    data: null
  };
  const [state, dispatch] = useReducer(screenReducer, initialState);
  const setCurrTodo = todo => {
    dispatch({type: CHANGE_SCREEN, data: todo});
  };


  return <ScreenContext.Provider value={{
    currTodo: state.data,
    setCurrTodo
  }}>{children}</ScreenContext.Provider>
};
