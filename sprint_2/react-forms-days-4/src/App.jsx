import './App.css';
import React, { useEffect, useState } from 'react';
import {Routes,Route} from "react-router-dom"
import axios from "axios"
import{v4 as uuid} from "uuid"
import {FormsDetails} from "./Components/Emplyees"
import { FormTable } from './Components/FormTable';
import { Navbar } from './Components/Navbar';
function App() {
  const [data,setData] =useState([]);
    useEffect(()=>{
      axios.get(`http://localhost:3333/userDetails`).then((r)=>setData(r.data))
    },[])
  const sendDataServer=(data)=>{
    //   fetch("http://localhost:3333/userDetails",{
    //     method:"POST",
    //     headers:{
    //         "content-type":"application/json"
    //     },
    //     body:JSON.stringify({
    //       id:uuid(),
    //       name:data.name,
    //       age:data.age,
    //       address:data.address,
    //       salary:data.salary,
    //       department:data.department,
    //       url:data.Url,
    //       marital:data.marital
    //     })
    // }).then((r)=>r.json())
    //  .then((d)=>{
    //     //  setTodos([...todos,d])
    //      console.log(d)
    //  })
    axios.post("http://localhost:3333/userDetails",{
      id:uuid(),
      name:data.name,
      age:data.age,
      address:data.address,
      salary:data.salary,
      department:data.department,
      imageUrl:data.imageUrl,
      marital:data.marital

    }).then((r)=>setData(r.data))
  }
  const remove =(id)=>{
    let removeData = data.filter((data)=>data.id!==id)
    setData(removeData)

  };
  const sortBySalary=(n)=>{
     console.log("get:",n.target.value)
    //  console.log("all:",data.salary)
     let type =n.target.value
     switch(type) {
       case "low" :{
         data.sort((a,b)=>a.salary-b.salary)
         setData([...data])
         break;
       }
       case "high" :{
           data.sort((a,b)=>b.salary-a.salary)
         setData([...data])
        break;
       }
       default :{
         setData(data)
         break;
       }
     }
     const fil = n.target.value
     console.log(fil)
     switch(fil){
       case "it" :{
        let fill = data.filter((d)=>(d.department==="it"))
         console.log("?:",fill)
         setData([...fill])
          break;
       }
       case "Me" :{
        let fill = data.filter((d)=>(d.department==="Me"))
         console.log("?:",fill)
         setData([...fill])
          break;
       }
       case "Ee" :{
        let fill = data.filter((d)=>(d.department==="Ee"))
         console.log("?:",fill)
         setData([...fill])
          break;
       }
       case "" :{
        let fill = data.filter((d)=>(d.department===""))
         console.log("?:",fill)
         setData([...fill])
          break;
       }
       default:{
         setData(data)
         break;
       }
     }
    //  setData(data)
  }
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<FormTable key={data.id}  data={data} remove={remove} sortBySalary={sortBySalary}/>}/>
        <Route path='/FormsDetails' element={<FormsDetails sendDataServer={sendDataServer}/>}/>
      </Routes>
      
      
    </div>
  );
}

export default App;
