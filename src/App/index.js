
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
import { EmptyTodos } from '../todosComp/EmptyTodos';   
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
        <TodoHeader loading={loading}>
            <TodoCount 
            todosCompleted={todosCompleted}
            totalTodos={totalTodos}
            // loading={loading}
            />
            <TodoSearch 
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            // loading={loading}
            />
        </TodoHeader>
        <TodoList 
            error={error}
            loading={loading}
            searchTodos={searchTodos}
            totalTodos={totalTodos}
            searchValue={searchValue}
            onError={() => <TodosError/>}
            onLoading={() => <><LoadingSvg/><TodosLoading/></>}
            onEmptyTodos={() => <EmptyTodos/>}
            onEmptySearchResult={(searchText) => <p>No hay resultados para {searchText}</p>}
            // render = {todo => (
            //     <TodoItem 
                    
            //         key={todo.text}
            //         text={todo.text}  
            //         completed={todo.completed} 
            //         onComplete={()=>completeTodos(todo.text)}
            //         onDelete={()=>deleteTodo(todo.text)}
            //         />
            //     )}

        >
            {todo => (
                <TodoItem 
                    
                    key={todo.text}
                    text={todo.text}  
                    completed={todo.completed} 
                    onComplete={()=>completeTodos(todo.text)}
                    onDelete={()=>deleteTodo(todo.text)}
                    />
                )}
            
        </TodoList>

        {/* <TodoList>
            
            {loading && (<><LoadingSvg/><TodosLoading/></>) }
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
        </TodoList> */}

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
