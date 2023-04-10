import React, { createContext, useState } from 'react'

export const TodosContext = createContext();

const TodosContextProvider = ({ children }) => {
  const [todos, setTodos] = useState({})
  const [selectedTodo, setSelectedTodo] = useState(null)
  
  const handleAddingTodo = (newTodo) => {
    setTodos(currentTodos => {
      return (
        {...currentTodos, [`${newTodo.id}`]: {...newTodo}}
      )
    })
  }

  const handleDeletingTodo = (todo) => {
    setTodos(currentTodos => {
      let newTodos = {...currentTodos};
      delete newTodos[todo.id];
      if(selectedTodo.id === todo.id) setSelectedTodo(null); 
      return newTodos;
    })
  }

  const handleExpandingTodo = (todo) => {
    setSelectedTodo(todo);
  }

  const handleCheckingTodo = (value, todo) => {
    setTodos( currentTodos => {
      let newTodos = { ...currentTodos};
      newTodos[todo.id].completed = value;
      return newTodos;
    })
  }

  return (
    <TodosContext.Provider value={
      {
        todos,
        selectedTodo,
        handleAddingTodo,
        handleDeletingTodo,
        handleExpandingTodo,
        handleCheckingTodo
      }
    }>
      {children}
    </TodosContext.Provider>
  )
}

export default TodosContextProvider;
