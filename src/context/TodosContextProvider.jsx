import React, { createContext, useState, useEffect } from 'react'

export const TodosContext = createContext();

const TodosContextProvider = ({ children }) => {
  const [todos, setTodos] = useState({})

  useEffect(() => {
    console.log(todos);
  }, [todos])

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
      return newTodos;
    })
  }

  return (
    <TodosContext.Provider value={
      {
        todos,
        handleAddingTodo,
        handleDeletingTodo
      }
    }>
      {children}
    </TodosContext.Provider>
  )
}

export default TodosContextProvider;
