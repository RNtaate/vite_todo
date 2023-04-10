import React from 'react'

export default function TodoItem({todo}) {
  return (
    <li >
      <input type='checkbox' id={todo.id} />
      <label htmlFor={todo.id}>{todo.title}</label>
      <button>DELETE</button>
    </li>
  )
}
