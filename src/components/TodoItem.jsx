import React from 'react'

export default function TodoItem({todo, deleteTodo}) {
  return (
    <li >
      <input type='checkbox' id={todo.id} />
      <label htmlFor={todo.id}>{todo.title}</label>
      <button onClick={() => (deleteTodo(todo))}>DELETE</button>
    </li>
  )
}
