

import React from "react";

export const ReactMobile = () =>{
   const mobile = [{
       heading :"Mobile Operating System",
       mobile1:[ {name :"Andriod",styles:"circle"},{name :"Blckbeery",styles:"circle"},{name :"iPhone",styles:"circle"},{name :"Windows phone",styles:"circle"}]   
   },
   {
       heading:"Mobile Manufactures",
       mobile1:[{name :"Samsung",styles:"square"},{name:"HTC",styles:"square"},{name:"Apple",styles:"disc"},{name:"Micromax",styles:"circle"}]
   }
 ]
    return (
        <div>
           {mobile.map((e)=>(
               <div>
                   <h1>{e.heading}</h1>
                   {/* <li styles={e.styles}>{e.mobile1.}</li> */}
                   {e.mobile1.map((e)=>(
                       <li className={e.styles}>{e.name}</li>
                   ))}
               </div>
           ))}
        </div>
    )
}