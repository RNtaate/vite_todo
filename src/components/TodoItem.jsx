import React, { useContext } from 'react'

import { TodosContext } from '../context/TodosContextProvider'

export default function TodoItem({todo}) {

  const todosContext = useContext(TodosContext);
  const { handleDeletingTodo, handleExpandingTodo, handleCheckingTodo, selectedTodo } = todosContext;

  const handleCheckToggle = (e) => {
    let value = e.target.checked;
    handleCheckingTodo(value, todo);
  }

  return (
    <li className="todo-item" onClick={() => handleExpandingTodo(todo)}
      style={{color: selectedTodo?.id === todo.id ? 'orange' : 'white', opacity: todo.completed ? 0.5 : 1 }}
    >
      <div className='item-naming-div'>
        <input type='checkbox' id={todo.id} onChange={handleCheckToggle} onClick={(e) => (e.stopPropagation())} />
        <label style={{textDecorationLine: todo.completed ? 'line-through' : 'none'}} >{todo.title}</label>
      </div>
      <button onClick={(e) => {
        e.stopPropagation()
        handleDeletingTodo(todo)
      }}  className="btn btn-danger item-btn" >DELETE</button>
    </li>
  )
}
