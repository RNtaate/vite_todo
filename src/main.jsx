import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import TodosContextProvider from './context/TodosContextProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodosContextProvider>
      <App />
    </TodosContextProvider>
  </React.StrictMode>,
)
