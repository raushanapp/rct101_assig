
import React from "react"


export const Restaurant = ({res}) =>{

    return (
        <div key={res.id} className="card">
        <img width="254" height="160px" src={res.image} alt="card" />
        <div className="restaurant-details">
            <div className="restaurant-title">{res.name}</div>
            <div className="restaurant-subtitle">{res.category.join(", ")}</div>
        </div>
        <div className="restaurant-info">
            <div className="restaurant-ratings">
                <i className="material-icons star-icon">star</i> {res.rating}
            </div>
             .<div className="restaurant-delivery-timings">{res.delivery_timing}</div> 
            <div className="restaurant-cost-for-two">{res.cost_for_two}</div>
        </div>
        <div className="offer-banner">
            <span className="material-icons"> local_offer </span>
            <span className="offer-text">{res.offer}</span>
        </div>
    </div>
    )
}