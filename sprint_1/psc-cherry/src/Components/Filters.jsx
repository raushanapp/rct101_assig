 import React from "react";

 export const Filters = ({filters,currentByFilter,updateFilter}) =>{
     return(
        <div className="container restaurants">
            <h1>50 restaurants</h1>
            <div className="restaurant-options">
                {Object.entries(filters).map(([key,value])=>(
                    <div key={key} className={`restaurant-option ${currentByFilter===value ? "underLine":""}`} onClick={()=>updateFilter(key)}>
                        {value}
                    </div>
                ))}
            </div>
        </div>
     )
 }