
import  "./TodoItems.css"
import React, { useState } from "react";

export const TodoItems = ({todo,showData,updateData}) =>{
   
  const [isDone,setIsDone] = useState(todo.status) 
    return (
        <div>
            <div className="TodoInput" key={todo.id} style={{display:"flex",
                justifyContent:"space-around",
                border:"1px solid grey",
                width:"20%",
                height:"25px",
                margin:"auto",
                marginTop:"10px",}}>
                <input type="checkbox" checked={isDone} onChange={(e)=>setIsDone(e.target.checked)} 
                  onClick={()=>updateData(todo.id)}
                />
                <div className={isDone ? "striked":null} >{todo.text}</div>
                <button onClick={()=>showData(todo.id)}>X</button>
            </div>
            {/* <div>
            todo.id,todo.text,todo.status
                <button onClick={()=>changePage(-1)}>Prev</button>
                <button onClick={()=>changePage(1)}>Next</button>
            </div> */}
          
        </div>
    )
}