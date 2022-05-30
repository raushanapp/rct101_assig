
import React, { useRef, useState } from "react";
function secondsToHms(d) {
    d = Number(d);
    console.log(d)
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);
    var ms =Math.floor(d/1000)
    console.log("h",h)
    console.log(ms)
    
    var hDisplay = h > 0 ? h + (h == 1 ? " hr, " : " hrs, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " min, " : " mins, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " sec" : " sec") : "";
    var msDisplay =ms > 0 ? ms +(ms===1000 ? "mm" :"MMs") :"";
    return hDisplay + mDisplay + sDisplay + msDisplay
}


export const StopWatchGoogle = () =>{
      const [watch,setWatch] =useState(0);
      const [show,setShow] =useState(true);
      const watchId = useRef(null)
      const start = () =>{

        if (!watchId.current) {
            let id =setInterval(()=>{
                setWatch((pre)=>pre +1*10)
            },100)
            watchId.current =id
        }
        setShow(false)

      }
      const stop =()=>{
        clearInterval(watchId.current);
        watchId.current=null;
        setShow(true);
      }
      const reset =() =>{
        clearInterval(watchId.current)
        setWatch(0);
        watchId.current=null;
        setShow(true)

      }
    return (
        <div>
            <h2>StopWatch</h2>
             <h3>{secondsToHms(watch)}</h3>
            {show ? (<button onClick={start}>Start</button>)
            :(<button onClick={stop}>Stop</button>)}
            <button onClick={reset}>Reset</button>


        </div>
    )
}