import React, { useState } from 'react'

const NewItemForm = ({addTodo}) => {

  const [newTodo, setNewTodo] = useState({title: "", description: ""})

  const handleSettingTitle = (e) => {
    setNewTodo(currentTodo => {
      return(
        {...currentTodo, title: e.target.value}
      )
    })
  }

  const handleSettingDescription = (e) => {
    setNewTodo(currentTodo => {
      return(
        {...currentTodo, description: e.target.value}
      )
    })
  }

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const {title, description} = newTodo;
    if(title.trim() === "" || description.trim() === "") return
    addTodo({...newTodo, id: crypto.randomUUID()});
    setNewTodo({title: "", description: ""});
  }

  return (
    <form className="item-form" onSubmit={handleSubmitForm} >
      <h4>New Todo</h4>
      <label htmlFor='item-title' >Tiltle</label>
      <input type="text" id="item-title" value={newTodo.title} onChange={handleSettingTitle} autoComplete="off" />
      <label>Description</label>
      <textarea value={newTodo.description} onChange={handleSettingDescription} ></textarea>
      <button type='submit' >Add</button>
    </form>
  )
}

export default NewItemForm;
