import React, { createContext, useState } from 'react'

export const TodosContext = createContext();

const TodosContextProvider = ({ children }) => {

  const [originalTodo, setOriginalTodo] = useState("Original Thunder");
  const showMeSomething = () => {
    console.log('I am a function from the context');
  }

  return (
    <TodosContext.Provider value={
      {
        originalTodo,
        showMeSomething
      }
    }>
      {children}
    </TodosContext.Provider>
  )
}

export default TodosContextProvider;
