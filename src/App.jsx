import { useState, useEffect } from 'react'

import './App.css'
import NewItemForm from './components/NewItemForm'

function App() {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    console.log(todos)
  }, [todos])

  const handleAddingTodo = (newTodo) => {
    setTodos(currentTodos => {
      return (
        [...currentTodos, newTodo]
      )
    })
  }

  return (
    <div className="App">
      <div className='upper-div' >
        <NewItemForm addTodo={handleAddingTodo} />
      </div>

      <div className='lower-div'>
        <aside className="items-list-aside" >
          <h4>Todos</h4>
          {todos.length === 0 && <h6>No Todos Created</h6>}
          <ul>
            {todos.map( item => {
              return(
              <li key={item.id}>
                <input type="checkbox" id={item.id} />
                <label htmlFor={item.id} >{item.title}</label>
                <button>Delete</button>
              </li>            
              )
            })}
          </ul>
        </aside>
        <div className="details-container-div" ></div>
      </div>
    </div>
  )
}

export default App
