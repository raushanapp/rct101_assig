
import React, { useState } from 'react'
import "./todoItem.css"
function TodoInput({acceptData}) {
    const [text,setText] = useState('')
    
  return (
    <div className='Input1'>
        <input type="text"  placeholder='Enter Todo' onChange={(e)=>setText(e.target.value)
        }  value={text}/>
        <button  onClick={()=>{acceptData(text);
          setText("")}}>+</button>
    </div>
  )
}

export default TodoInput