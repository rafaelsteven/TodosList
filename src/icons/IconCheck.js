import React from 'react';
import { TodosIcons } from './TodosIcons';
function IconCheck (props){

  return(
    <TodosIcons
      type="check"
      color={props.completed ? '#00ff37' : '#fff'}
      onClick={props.onComplete}
    />
  );
};

export {IconCheck};
