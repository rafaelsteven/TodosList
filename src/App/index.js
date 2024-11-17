
import { AppUI } from './AppUI';
import '../css/styleGeneral.css';
import React from 'react';
import './App.css';
import { TodoProvider } from "../todosComp/TodoProvider";


function App() {
  //JSX
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}
export default App;
