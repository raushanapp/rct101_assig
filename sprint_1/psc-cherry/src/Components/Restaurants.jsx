import React from "react"
import { Restaurant } from "./Restaurant"
export const Restaurants = ({restaurants}) =>{

    return (
        <div className="container divider">
            <div className="cards">
                {restaurants.map((res)=>(
                <Restaurant key={res.id}  res={res}/>
                ))}
            </div>       
       </div>
    )
}