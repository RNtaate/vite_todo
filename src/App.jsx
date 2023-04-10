import { useContext } from 'react'

import './App.css'
import NewItemForm from './components/NewItemForm';
import TodosList from './components/TodosList';
import { TodosContext } from './context/TodosContextProvider';
import TodoDetails from './components/TodoDetails';

function App() {

  const todosContext = useContext(TodosContext);
  const { todos, selectedTodo } = todosContext;

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
        <div className="details-container-div" >
          {selectedTodo ? <TodoDetails todo={selectedTodo}/> : <p>No Todo Selected</p>}
        </div>
      </div>
    </div>
  )
}

export default App
