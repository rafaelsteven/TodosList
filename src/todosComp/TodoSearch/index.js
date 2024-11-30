function TodoSearch ({searchValue,setSearchValue})
{
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