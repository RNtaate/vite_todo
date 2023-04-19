import React, { useContext } from 'react'

import { TodosContext } from '../context/TodosContextProvider'

export default function TodoDetails({ todo }) {
  const todosContext = useContext(TodosContext)
  const { handleDeletingTodo } = todosContext

  return (
    <div className="todos-details-div">
      <h1>{todo.title}</h1>
      <p className="todo-description-p">{todo.description}</p>
      <div className="status-edit-div">
        <span>
          <b>STATUS: </b>
          <p
            className="status-p"
            style={{
              color: todo.completed ? 'cyan' : '#EE4B2B',
            }}
          >
            {todo.completed ? 'Completed' : 'Not completed'}
          </p>
        </span>
        <button
          onClick={() => handleDeletingTodo(todo)}
          className="btn btn-danger item-btn"
        >
          DELETE
        </button>
      </div>
    </div>
  )
}
