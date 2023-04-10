import React from 'react';

import TodoItem from './TodoItem';

export default function TodosList({todos}) {
  return (
    <ul>
      {Object.keys(todos).map( singleKey => {
        return(
          <TodoItem key={singleKey} todo={todos[singleKey]} />
        )
      })}
    </ul>    
  )
}
