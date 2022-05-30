
import React, { useEffect, useRef, useState } from "react";
function secondsToHms(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);
    console.log(s)
    var ms = (s*10)

    var hDisplay = h > 0 ? h + (h == 1 ? " hr, " : " hr, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " min, " : " min, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " sec" : " sec") : "";
    // var msDisplay =ms>0 ? ms +(ms===1000 ? "milisecond" :"miliseconds") :"";
    return hDisplay + mDisplay + sDisplay
}
export const TimerGoogle = () =>{
    const [timer,setTimer] =useState(0);
    const timerId = useRef(null);
    const [show ,setShow] =useState(true)
    // useEffect(()=>{
       
    // },[])
    const handleStart =() =>{
        if (!timerId.current) {
            let id = setInterval(()=>{
            setTimer((pre)=>pre +1)
    
            },1000)
            timerId.current=id
            setShow(false)
       }

      
    }
    const handleStop=()=>{
        clearInterval(timerId.current)
        timerId.current =null
        setShow(true)

    }
    const handleReset =() =>{
        clearInterval(timerId.current)
        timerId.current=null
        setTimer(0) 
        setShow(true)
    }

    return (
        <div>
            <h2>Timer</h2>
            <h3>{secondsToHms(timer)}</h3>
            { show ? ( <button onClick={handleStart} >Start</button>)
            :( <button onClick={handleStop} >Stop</button>)}
            <button onClick={handleReset}>Rest</button>
        </div>
    )
}