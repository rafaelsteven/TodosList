import React from "react";
import { useLocalStorage } from "./UseLocalStorage";
const TodoContext = React.createContext();

function TodoProvider({children})
{
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error
      } = useLocalStorage('TODOS_V1',[]);
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal,setOpenModal] = React.useState(false);
    const [titleModal,setTitleModal] = React.useState('titulo');
    
    const todosCompleted = todos.filter(todo => todo.completed ).length;
    const totalTodos = todos.length;
    const searchTodos = todos.filter(todo => {
      return todo.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    });
  
  
    const deleteTodo = (text) => {
      const newTodos = [...todos];
      const todoIndex = newTodos.findIndex(
        (todo) => todo.text === text
      );
      newTodos.splice(todoIndex, 1);
      saveTodos(newTodos);
    };
  
    
    const completeTodos = (text) =>{
      const newTodos = [...todos];
      const todoIndex = newTodos.findIndex(
        (todo) => todo.text === text
      );
  
      newTodos[todoIndex].completed = true;
      saveTodos(newTodos);
    };

    const actionModal= (statusModal,text_title) =>{
      setOpenModal(statusModal);
      if(text_title)
        setTitleModal(text_title);
      else
        setTitleModal('');
        
    };

    const addTodo = (text) =>{

      // const data = {
      //    text: text, completed: false
      // };
      // const newTodos = [...todos,data];
      const newTodos = [...todos];
      newTodos.push(
        {
          text,
          completed: false
        }
      );
      saveTodos(newTodos);
    };
    return(
        <TodoContext.Provider 
        value={{
            todosCompleted,
            totalTodos,
            searchValue,
            setSearchValue,
            searchTodos,
            completeTodos,
            deleteTodo,
            loading,
            error,
            openModal,
            setOpenModal,
            actionModal,
            titleModal,
            addTodo
            }}>
                {children}
        </TodoContext.Provider>
    );
}

export {TodoContext,TodoProvider};