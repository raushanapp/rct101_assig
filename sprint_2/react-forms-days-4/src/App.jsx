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

    }).then((r)=>console.log(r))
  }
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<FormTable key={data.id}  data={data}/>}/>
        <Route path='/FormsDetails' element={<FormsDetails sendDataServer={sendDataServer}/>}/>
      </Routes>
      
      
    </div>
  );
}

export default App;
