function CreateTodoButton ({actionModal})
{
  return (
    <button 
    className="button_create"
    onClick={()=>{actionModal(true,'Crear TODO')}}
    >+</button>
  );
}

export {CreateTodoButton};