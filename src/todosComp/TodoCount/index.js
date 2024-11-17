import { TodoContext } from "../TodoProvider";
import React from "react";
function TodoCount ()
{
  const {
    todosCompleted,
    totalTodos,
  } = React.useContext(TodoContext);
  return (
    <h1 className="titulo_todos">Has completado 
    <span
    className="text-span-num"
    > {todosCompleted} </span> de 
    <span
    className="text-span-num"
    > {totalTodos} </span> 
    TODOS</h1>
  );
}

export {TodoCount};