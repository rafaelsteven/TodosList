import { TodoContext } from "../TodoProvider";
import React from "react";
function CreateTodoButton (pro)
{
  const {
    actionModal
  } = React.useContext(TodoContext);
  return (
    <button 
    className="button_create"
    onClick={()=>{actionModal(true,'Crear TODO')}}
    >+</button>
  );
}

export {CreateTodoButton};