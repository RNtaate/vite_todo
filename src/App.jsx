import { useState, useEffect, useContext } from 'react'

import './App.css'
import NewItemForm from './components/NewItemForm';
import TodosList from './components/TodosList';
import { TodosContext } from './context/TodosContextProvider';

function App() {

  const todosContext = useContext(TodosContext);
  const { todos } = todosContext;

  // const handleAddingTodo = (newTodo) => {
  //   setTodos(currentTodos => {
  //     return (
  //       {...currentTodos, [`${newTodo.id}`]: {...newTodo}}
  //     )
  //   })
  // }

  // const handleDeletingTodo = (todo) => {
  //   setTodos(currentTodos => {
  //     let newTodos = {...currentTodos};
  //     delete newTodos[todo.id];
  //     return newTodos;
  //   })
  // }

  return (
    <div className="App">
      <div className='upper-div' >
        <NewItemForm />
      </div>

      <div className='lower-div'>
        <aside className="items-list-aside" >
          <h4>Todos</h4>
          {Object.keys(todos).length === 0 && <h6>No todos yet</h6>}
          <TodosList />
        </aside>
        <div className="details-container-div" ></div>
      </div>
    </div>
  )
}

export default App
