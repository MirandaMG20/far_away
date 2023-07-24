import React from 'react';
import { useState } from 'react';

function Form({onAddItems}) {

  const [description, setDescription] = useState('')
  const [quantity, setQuantity] = useState(1)

  const handleSubmit = (e) => { //Add button
    // console.log(e)
    e.preventDefault();

    if(!description) return; // if description is empty or if "not" description, don't log it or store

    const newItem = {
      id: Date.now(),
      quantity,
      description,
      packed: false
    }

    // console.log(newItem)
    onAddItems(newItem)
    
    setDescription('') // reset the item bar
    setQuantity(1) // reset to the starting point, empty arr
  }

  const handleChange = (e) => {
    // console.log(e.target.value)
    setDescription(e.target.value)
  }

  const handleQuantityChange = (e) => {
    // console.log(typeof e.target.value)
    setQuantity(Number(e.target.value))
  }

  return (
    <form className='add-form' onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>

      <select value={quantity} onChange={handleQuantityChange}>
        {/* Create an Array from 1 to 20 to add the quantity of the item for the list */}
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {''}
            {num}
            {''}
          </option>
        ))}
        {/* This is not the best option
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option> */}
      </select>

      <input
        type='text'
        placeholder='item...'
        value={description}
        onChange={handleChange}
      />

      <button>Add</button>
    </form>
  )
}

export default Form