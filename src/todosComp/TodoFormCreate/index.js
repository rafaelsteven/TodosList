import React from "react";
import './css/FormCreateTodo.css';
function TodoFormCreate({addTodo,actionModal})
{
    const [newTodosValue,setNewTodosValue] = React.useState('');
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodosValue);
        // setNewTodosValue("");
        actionModal(false);
    };
    const onChangeTodo = (event) => {
        setNewTodosValue(event.target.value)
    }
 return(
    <form className="form-create-todo" onSubmit={onSubmit}>
        <label className="label_title_form">Ingrese su primer TODO</label>
        <textarea value={newTodosValue} 
        onChange={onChangeTodo}
        className="textarea-text-todo"
        placeholder="Estudiar nuevos cursos"
        ></textarea>
        <div className="div-conteinerButton">
            <button type="button" className="btn-class btn-cancel" onClick={()=>{actionModal(false)}}>
                <span className="btn-txt">Cancelar</span>
                </button>
            <button type="submit" className="btn-class btn-add">
                <span className="btn-txt">Anadir</span>
                </button>
        </div>
    </form>
 );
}

export {TodoFormCreate}