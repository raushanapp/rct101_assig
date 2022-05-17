
import React, { useState } from 'react'
import "./todoItem.css"
function TodoInput({acceptData}) {
    const [text,setText] = useState('')
    const clearInput = () =>{
       setText("")
    }
  return (
    <div className='Input1'>
        <input type="text" placeholder='Enter Todo' onChange={(e)=>setText(e.target.value)
        } />
        <button  onClick={()=>{acceptData(text);
          clearInput}}>+</button>
    </div>
  )
}

export default TodoInput