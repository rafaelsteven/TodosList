import React from 'react';
function useLocalStorage(itemName,initialValue)
{
  const [sincronizedItem,setSincronizedItem] = React.useState(true);
  const [item,setItem] = React.useState(initialValue);
  const [loading,setLoading] = React.useState(true);
  const [error,setError] = React.useState(false);
  React.useEffect(()=>{
    setTimeout(()=>{
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        if(!localStorageItem)
        {
          localStorage.setItem(itemName,JSON.stringify(initialValue));
          parsedItem = initialValue;
        }
        else
        {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }
        setLoading(false);
        setSincronizedItem(true);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    }, 3000);
}, [sincronizedItem]);
  
  const saveItem = (newItem) =>{
    localStorage.setItem(itemName,JSON.stringify(newItem));
    setItem(newItem);
  };

  const sincronizeIteam = () => {
    setLoading(true);
    setSincronizedItem(false);
  };
  return {
    item,
    saveItem,
    loading,
    error,
    sincronizeIteam
  };
}

export {useLocalStorage};

// import { jsx } from 'react/jsx-runtime';
// const defaultTodos = [
//   { text: 'Tarea 1', completed: true, swapy: 'item1' },
//   { text: 'tarea 2', completed: false , swapy: 'item2'},
//   { text: 'tarea 3', completed: true , swapy: 'item3'},
//   { text: 'tarea 4', completed: false, swapy: 'item4' },
// ];

// const defaultTodos= [];