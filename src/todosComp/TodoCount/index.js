
function TodoCount ({todosCompleted,totalTodos,loading})
{

  return (
    <h1 className={`titulo_todos ${loading && 'titulo_todos--loading'}`}>Has completado 
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