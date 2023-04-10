import React, { useContext } from 'react'

import { TodosContext } from '../context/TodosContextProvider'

export default function TodoItem({todo}) {

  const todosContext = useContext(TodosContext);
  const { handleDeletingTodo, handleExpandingTodo } = todosContext;

  return (
    <li >
      <input type='checkbox' id={todo.id} />
      <label htmlFor={todo.id}>{todo.title}</label>
      <button onClick={() => (handleDeletingTodo(todo))}>DELETE</button>
      <button onClick={() => {handleExpandingTodo(todo)}} >EXPAND</button>
    </li>
  )
}
