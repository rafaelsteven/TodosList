import { TodoCount } from '../todosComp/TodoCount';
import { CreateTodoButton } from '../todosComp/CreateTodosButton';
import { TodoSearch } from '../todosComp/TodoSearch';
import { TodoList } from '../todosComp/TodoList';
import { TodoItem } from '../todosComp/TodoItem';
import { TodosLoading } from '../todosComp/TodosLoading';
import { LoadingSvg } from '../todosComp/LoadingPaging';
import { TodosError } from '../todosComp/TodosError';
import { TodoContext } from '../todosComp/TodoProvider';
import { Modal } from '../todosComp/Modal';
import React from 'react';
import { TodoFormCreate } from '../todosComp/TodoFormCreate';

function AppUI(){
    const{
        searchTodos,
        completeTodos,
        deleteTodo,
        loading,
        error,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext);
    return(
        <div className='card_principal'>
            <TodoCount />
            <TodoSearch />

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

            <CreateTodoButton />

            {openModal && (
                <Modal>
                    <TodoFormCreate></TodoFormCreate>
                </Modal>)}
        </div>
    );
    
}
export {AppUI};


{/* <TodoContext.Consumer>
{({
    searchTodos,
    completeTodos,
    deleteTodo,
    loading,
    error
})=>(
    
)}
</TodoContext.Consumer> */}