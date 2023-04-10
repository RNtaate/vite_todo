import { useContext, useState } from 'react'

import './App.css'
import NewItemForm from './components/NewItemForm';
import TodosList from './components/TodosList';
import { TodosContext } from './context/TodosContextProvider';
import TodoDetails from './components/TodoDetails';

function App() {

  const [showForm, setShowForm] = useState(false);
  const todosContext = useContext(TodosContext);
  const { todos, selectedTodo } = todosContext;

  return (
    <div className="App">
      <div className='upper-div'
        onClick={() => (setShowForm(false))}
        style={
          {
            zIndex: showForm ? 10 : -1,
            opacity: showForm ? 1 : 0,
          }
        }
      >
        <NewItemForm setShowForm={setShowForm}/>
      </div>

      <div className='lower-div'>
        <aside className="items-list-aside" >
          <h1>Todos</h1>
          {Object.keys(todos).length === 0 && <h6>No todos yet</h6>}
          <TodosList />
          <button className="add-todo-btn btn" onClick={() => setShowForm(true)} >Add Todo</button>
        </aside>
        <div className="details-container-div" >
          {selectedTodo ? <TodoDetails todo={selectedTodo}/> : <p>No Todo Selected</p>}
        </div>
      </div>
    </div>
  )
}

export default App
