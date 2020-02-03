import React, {useState} from 'react';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import {TodoState} from "./src/context/todo/TodoState";
import {MainLayout} from "./src/MainLayout";
import {ScreenState} from "./src/context/screen/ScreenState";

async function loadApp() {
  await Font.loadAsync({
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
  })
};

export default function App() {
  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadApp}
        onError={err => console.log(err)}
        onFinish={() => setIsReady(true)}
      />
    );
  }

  return (
    <ScreenState>
      <TodoState>
        <MainLayout/>
      </TodoState>
    </ScreenState>
  );
}

/*<ScrollView>
  {todos.map(todo => <Todo key={todo.id} todo={todo}></Todo>)}
</ScrollView>*/
