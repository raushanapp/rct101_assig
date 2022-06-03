import './App.css';
import React from 'react';
import axios from "axios"
import{v4 as uuid} from "uuid"
import {FormsDetails} from "./Components/Emplyees"
function App() {

  const sendDataServer=(data)=>{
    console.log(data.marital)
      // console.log("data:",data)
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
      <FormsDetails sendDataServer={sendDataServer}/>
    </div>
  );
}

export default App;
