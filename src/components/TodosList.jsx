import React from 'react';

import TodoItem from './TodoItem';

export default function TodosList({todos, deleteTodo}) {
  return (
    <ul>
      {Object.keys(todos).map( singleKey => {
        return(
          <TodoItem key={singleKey} todo={todos[singleKey]} deleteTodo={deleteTodo} />
        )
      })}
    </ul>    
  )
}
