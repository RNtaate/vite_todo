import React, { createContext, useState, useEffect } from 'react'

export const TodosContext = createContext();

const TodosContextProvider = ({ children }) => {
  const [todos, setTodos] = useState({})
  const [selectedTodo, setSelectedTodo] = useState(null)

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
      if(selectedTodo.id === todo.id) setSelectedTodo(null); 
      return newTodos;
    })
  }

  const handleExpandingTodo = (todo) => {
    setSelectedTodo(todo);
  }

  return (
    <TodosContext.Provider value={
      {
        todos,
        selectedTodo,
        handleAddingTodo,
        handleDeletingTodo,
        handleExpandingTodo
      }
    }>
      {children}
    </TodosContext.Provider>
  )
}

export default TodosContextProvider;
