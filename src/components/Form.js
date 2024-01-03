

import React, { useState } from 'react'
import "../App.css"

function Form() {
    const [name, setName]= useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        setName("");
        console.log("Form submitted");
    }
    
  return (
   <form onSubmit={handleSubmit}>
        <fieldset>
            <div className='Field'>
                <label htmlFor='name' >Name:</label>
                <input 
                type='text'
                placeholder='Name' 
                value={name}
                onChange={(e) => setName(e.target.value)}
                name='name'/>
            </div>
            <button disabled={!name} type='submit'>Submit</button>
        </fieldset>
   </form>
  )
}

export default Form;