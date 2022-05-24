
import React, { useState } from "react";

export const TodoInput = ({sendData}) =>{

    const [text,setText] =useState("")

    return (
        <div>
            <input type="text" placeholder="Add Todos"  value={text} onChange={(e)=>setText(e.target.value)} />
            <button onClick={()=>{sendData(text);setText("")}}>+</button>
        </div>
    )
}