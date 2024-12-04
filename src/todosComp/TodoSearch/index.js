function TodoSearch ({searchValue,setSearchValue,loading})
{
  return (
    <input 
    className="input_search" 
    placeholder="ingresar busqueda" 
    value={searchValue}
    onChange={(event)=>{
      setSearchValue(event.target.value);
    }}
    disabled={loading}  
    />
  );
}

export {TodoSearch};