import React from 'react'

export default function TodoDetails({todo}) {
  return (
    <div>
      <h1>{todo.title}</h1>
      <p>{todo.description}</p>
      <span><b>STATUS: </b>Not Completed</span>
    </div>
  )
}
