
import React, { useState } from 'react'
import "./todoItem.css"
function TodoItem({todo,deleteItem}) {
    const [isCompleted,setIsCompleted] = useState(todo.isCompleted)
  return (
    <div className='Items' key={todo.id}>
        <div className={isCompleted ? "striked" :null}>{todo.title}</div>
        <div>
            <input type="checkbox"  checkecd = {isCompleted}  onChange = {(e)=>setIsCompleted(e.target.checked)}/>
        </div>
        <div>
            <button  onClick={()=>deleteItem(todo.id)}>Delete</button>
        </div>
    </div>
  )
}

export default TodoItem