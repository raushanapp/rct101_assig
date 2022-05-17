import React, { useState } from 'react'
 import  "./Counter.css"
function Counter() {
  const [count, setCount] = useState(2)
  const handleChange1 = (v) =>{
      let ans = (1*v)
      setCount(count+ans)
   }
   const handleChange = (v) =>{
       if (count<=0){
           return
       }
       setCount(count + v)
   }
  return (
    <div className='Counter'>
     <h1 className={count % 2===0 ? "even" :"odd"}>Count : {count %2===0 ? count : count}</h1>
       <button onClick={()=>{handleChange1(2)}}>Increment</button>
       <button onClick={()=>{handleChange(-1)}}>Decrement</button>
    </div>
  )
}

export default Counter