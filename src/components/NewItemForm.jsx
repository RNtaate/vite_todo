import React from 'react'

const NewItemForm = () => {
  return (
    <form className="item-form" >
      <h4>New Todo</h4>
      <label htmlFor='item-title' >Tiltle</label>
      <input type="text" id="item-title" />
      <lable>Description</lable>
      <textarea></textarea>
    </form>
  )
}

export default NewItemForm;
