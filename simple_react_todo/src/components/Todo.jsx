
import React, { useState } from 'react'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'
import {nanoid} from "nanoid"

function TodoList() {
    const [todoList,setTodoList] = useState([])
    const acceptData = (todo)=>{
        // console.log("data",todo)
        const payLoad = {
          title :todo,
          status:false,
          id:nanoid(4)
        }
        setTodoList([...todoList,payLoad])
        // setText("")
        
    }
    const deleteItem = (id) =>{
      console.log(id)

      let newItem = todoList.filter((todo) => todo.id!==id)
      setTodoList(newItem)

    }
  return (
    <div>
        <TodoInput acceptData = {acceptData} />
        {todoList.map((e)=>(
          <TodoItem todo ={e} key = {e.id} deleteItem = {deleteItem}/>
        ))}
    </div>
  )
}

export default TodoList