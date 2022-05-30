import React from "react";

export const Offers = ({offers}) =>{
    return (
        <section className="offers">
        <div className="container">
            {offers.map((image,index)=>( <img key={index} className="offer"  alt="food offers" src={image}/>))}

        </div>
    </section>
    )
}