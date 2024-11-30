
// import { AppUI } from './AppUI';
import '../css/styleGeneral.css';
import React from 'react';
import './App.css';
import { TodoCount } from '../todosComp/TodoCount';
import { CreateTodoButton } from '../todosComp/CreateTodosButton';
import { TodoSearch } from '../todosComp/TodoSearch';
import { TodoList } from '../todosComp/TodoList';
import { TodoItem } from '../todosComp/TodoItem';
import { TodosLoading } from '../todosComp/TodosLoading';
import { LoadingSvg } from '../todosComp/LoadingPaging';
import { TodosError } from '../todosComp/TodosError';
import { TodoHeader } from '../todosComp/TodoHeader';
import { Modal } from '../todosComp/Modal';
import { TodoFormCreate } from '../todosComp/TodoFormCreate';
//use
import { useTodos } from './useTodos';

//solucion correcta
function App() {
  const{
    searchTodos,
    completeTodos,
    deleteTodo,
    loading,
    error,
    openModal,
    todosCompleted,
    totalTodos,
    searchValue,
    setSearchValue,
    addTodo,
    actionModal,titleModal
} = useTodos();
  //JSX
  return(
    <div className='card_principal'>
        <TodoHeader>
            <TodoCount 
            todosCompleted={todosCompleted}
            totalTodos={totalTodos}
            />
            <TodoSearch 
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            />
        </TodoHeader>
        <TodoList>
            {loading && (<><LoadingSvg/><TodosLoading/><TodosLoading/><TodosLoading/></>) }
            {error && <TodosError/>}
            {(!loading && searchTodos.length === 0) && <p>Ingresa un todo</p>}
            {searchTodos.map(todo =>(
            <TodoItem 
                
                key={todo.text}
                text={todo.text}  
                completed={todo.completed} 
                onComplete={()=>completeTodos(todo.text)}
                onDelete={()=>deleteTodo(todo.text)}
                />
            ))}
        </TodoList>

        <CreateTodoButton 
        actionModal={actionModal}
        />

        {openModal && (
            <Modal
            actionModalt={actionModal}
            titleModal={titleModal}
            >
              
                <TodoFormCreate
                addTodo={addTodo}
                actionModal={actionModal}
                />
            </Modal>)}
    </div>
);
}
export default App;
