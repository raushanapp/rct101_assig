
import React from "react";
import logo from "../assets/logo.svg"
const navbarOptions = [
    {
       iconName :"person_outline",
       lable:"Sign In"
    },
    {
        iconName :"shopping_bag",
        lable:"Cart"
     },
     {
        iconName :"support",
        lable:"Help"
     },
     {
        iconName :"search",
        lable:"Search"
     },
]
export const Navbar = (props) =>{

    return (
        
            <section className="navbar">
            <div className="container">
             <img className="logo"  src={logo}/>
            <div className="location">
                <span className="city"> {props.City}</span>
                <span className="state">{props.State},{props.Country}</span>
            </div>
            <div className="navbar-options">
                {navbarOptions.map((e)=>(
                    <div key={e.iconName} className="navbar-option">
                    <span className="material-icons">{e.iconName}</span> {e.lable}
                </div>
                ))}
            </div>
        </div>
    </section>
    )
}