import React, { useContext } from 'react'

import { TodosContext } from '../context/TodosContextProvider'

export default function TodoItem({todo}) {

  const todosContext = useContext(TodosContext);
  const { handleDeletingTodo, handleExpandingTodo, handleCheckingTodo } = todosContext;

  const handleCheckToggle = (e) => {
    let value = e.target.checked;
    handleCheckingTodo(value, todo);
  }

  return (
    <li className="todo-item" >
      <div className='item-naming-div'>
        <input type='checkbox' id={todo.id} onChange={handleCheckToggle} />
        <label htmlFor={todo.id}>{todo.title}</label>
      </div>
      <button onClick={() => (handleDeletingTodo(todo))}>DELETE</button>
      <button onClick={() => {handleExpandingTodo(todo)}} >EXPAND</button>
    </li>
  )
}
