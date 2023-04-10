import React from 'react'

export default function TodosList({todos}) {
  return (
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
  )
}
