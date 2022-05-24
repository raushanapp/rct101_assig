
import React, { useEffect, useState } from "react";
import { TodoInput } from "./TodoInput";
import { TodoItems } from "./TodoItems";

export const Todos = () =>{
    const [show,setShow] = useState(true)
    const [todos,setTodos]=useState([]);
    const [page,setPage] = useState(1)

    const changePage = ()=>{

    }

    const showData = (id)=>{
        let newData = todos.filter((todo)=>todo.id!==id)
        setTodos(newData)
    }
    const sendData =(text) =>{
        fetch("  http://localhost:8080/todos",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify({
                text:text,
                status:false
            })
        }).then((r)=>r.json())
         .then((d)=>{
             setTodos([...todos,d])
             console.log(d)
         })
    }
    useEffect(()=>{
        fetch(`http://localhost:8080/todos?_page=${page}&_limit=5`).then((r)=>r.json()).then((d)=>{
            console.log(d)
            setTodos(d)
            setShow(false)
        })
    },[page])

    return show ? "Loding......":(
        <div>
            Todos
            <TodoInput sendData={sendData}/>
           {todos.map((e)=>(
            <TodoItems key={e.id} todo={e} showData={showData}/>
           )) }
            <div>
                <button disabled={!page} onClick={()=>setPage(page-1)}>Prev</button>
                <button onClick={()=>setPage(page +1)}>Next</button>
            </div>
        </div>
    )
}