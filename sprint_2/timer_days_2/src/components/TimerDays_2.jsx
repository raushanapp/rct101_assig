import React, { useEffect, useState } from "react";
function secondsToHms(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);
    var ms = (s*1000)

    var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    var msDisplay =ms>0 ? ms +(ms===1000 ? "milisecond" :"miliseconds") :"";
    return hDisplay + mDisplay + sDisplay +msDisplay; 
}
export const TimerDays2 =() =>{
    const [timer,setTimer]=useState(0)
    useEffect(()=>{
       let id = setInterval(()=>{

            setTimer((prev)=>prev +1)
       },100)

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