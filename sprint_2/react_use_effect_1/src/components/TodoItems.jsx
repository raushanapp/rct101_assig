

import React from "react";

export const TodoItems = ({todo,showData}) =>{
   

    return (
        <div>
            <div className="TodoInput" key={todo.id} style={{display:"flex",
                justifyContent:"space-around",
                border:"1px solid grey",
                width:"20%",
                height:"25px",
                margin:"auto",
                marginTop:"10px",}}>
                <input type="checkbox" />
                <div>{todo.text}</div>
                <button onClick={()=>showData(todo.id)}>X</button>
            </div>
            {/* <div>
                <button onClick={()=>changePage(-1)}>Prev</button>
                <button onClick={()=>changePage(1)}>Next</button>
            </div> */}
          
        </div>
    )
}