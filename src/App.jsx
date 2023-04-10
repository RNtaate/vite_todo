import './App.css'
import NewItemForm from './components/NewItemForm'

function App() {

  return (
    <div className="App">
      <div className='upper-div' >
        <NewItemForm />
      </div>

      <div className='lower-div'>
        <aside className="items-list-aside" ></aside>
        <div className="details-container-div" ></div>
      </div>
    </div>
  )
}

export default App
