
import React from "react";
import "./Navbar.css" 
export const Navbar = () =>{
   const data = ["Services","Projects","About"]
    return (
        <div className="Navbar">
          <div className="Logo">
              <p>LOGOBAKERY</p>
          </div>
          <div className="ThreeButton">
              {data.map((e)=>(
                  <p>{e}</p>
              ))}
          </div>
          <div className="Btn">
              <button className="Contact">Contact</button>
          </div>
        </div>
    )
}