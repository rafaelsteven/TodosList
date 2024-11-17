import React from "react";
import './css/TodosLoading.css';
function TodosLoading ({searcValue,setSearchValue})
{
  return (
    <div className="LoadingTodos-conteiner">
        <span className="LoadingTodos-spanAction"></span>
            <div className="LoadingTodos-text-conteiner">
                <p className="LoadingTodos-text LoadingTodos-text1"></p>
                <p className="LoadingTodos-text LoadingTodos-text2"></p>
            </div>
        <span className="LoadingTodos-spanAction"></span>
    </div>
  );
}

export {TodosLoading};