import React from 'react';
import { TodosIcons } from './TodosIcons';
function DeleteIcon (props){

  return(
    <TodosIcons
      type="delete"
      color="white"
      onClick={props.onDelete}
    />
  );
};

export {DeleteIcon};
