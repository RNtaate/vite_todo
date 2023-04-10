import React, { useContext } from 'react'

import { TodosContext } from '../context/TodosContextProvider'

export default function TodoDetails({todo}) {

  const todosContext = useContext(TodosContext);
  const { handleDeletingTodo } = todosContext;

  return (
    <div>
      <h1>{todo.title}</h1>
      <p>{todo.description}</p>
      <span><b>STATUS: </b>{todo.completed ? "Completed" : "Not completed"}</span>
      <button onClick={() => handleDeletingTodo(todo)} >DELETE</button>
    </div>
  )
}
