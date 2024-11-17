import { TodoContext } from "../TodoProvider";
import React from "react";

function TodoSearch ()
{
  const {
    searchValue,
    setSearchValue,
  } = React.useContext(TodoContext);
  return (
    <input 
    className="input_search" 
    placeholder="ingresar busqueda" 
    value={searchValue}
    onChange={(event)=>{
      setSearchValue(event.target.value);
    }}
    />
  );
}

export {TodoSearch};