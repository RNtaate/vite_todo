import React, { useContext } from 'react';

import { TodosContext } from '../context/TodosContextProvider';
import TodoItem from './TodoItem';

export default function TodosList() {

  const todosContext = useContext(TodosContext);
  const { todos } = todosContext;

  return (
    <ul className="todo-list">
      {Object.keys(todos).map( singleKey => {
        return(
          <TodoItem key={singleKey} todo={todos[singleKey]} />
        )
      })}
    </ul>    
  )
}
