
function TodoCount ({todosCompleted,totalTodos})
{

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