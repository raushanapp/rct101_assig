import React, { useEffect, useState } from "react";
function secondsToHms(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);

    var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    return hDisplay + mDisplay + sDisplay; 
}
export const Timer =() =>{
    const [timer,setTimer]=useState(0)
    useEffect(()=>{
       let id = setInterval(()=>{

            setTimer((prev)=>prev +1)
       },1000)

       return ()=>{
           clearInterval(id)
       }
        
    },[])
   
    return (
        <div>
            <h1>Watch</h1>
            <h1>{secondsToHms(timer)}</h1>
        </div>
    )
}