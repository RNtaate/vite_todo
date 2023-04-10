import { useState, useEffect } from 'react'

import './App.css'
import NewItemForm from './components/NewItemForm'

function App() {

  const [todos, setTodos] = useState({});

  useEffect(() => {
    console.log(todos)
  }, [todos])

  const handleAddingTodo = (newTodo) => {
    setTodos(currentTodos => {
      return (
        {...currentTodos, [`${newTodo.id}`]: {...newTodo}}
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
          {Object.keys(todos).length === 0 && <h6>No todos yet</h6>}
          <ul>
            {Object.keys(todos).map( singleKey => {
              return(
                <li key={singleKey} >
                  <input type='checkbox' id={singleKey} />
                  <label htmlFor={singleKey}>{todos[singleKey].title}</label>
                  <button>DELETE</button>
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
