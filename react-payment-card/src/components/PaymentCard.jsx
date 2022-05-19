
import React from "react"
import { PaymentItem } from "./PaymentItem"
// import { MobileDesktop } from "./MobileDesktop"

export const PaymentCard = () =>{
    const mobilPaymentData= [{
        id:1,
       date :"20|10|2020",
       btn :"Case Study",
       logo:"https://imgs.search.brave.com/5O-ZAd6vi2RIX7U7_CH1EVeGZqjSh7AmiOUYBb2kGgA/rs:fit:1121:922:1/g:ce/aHR0cDovL3BuZ2lt/Zy5jb20vdXBsb2Fk/cy9hbWF6b24vYW1h/em9uX1BORzUucG5n",
       gift :"Amazon Gift",
       pay :"pay",
       desktop :"Desktop - Mobile"
    },
    {
        id:2,
        date :"17 Sep 2020",
        btn :"Case Study",
        logo:"https://imgs.search.brave.com/a0w4BaZrn9NsnBszfvYFAQ804ma8-TpwG8AirihXHkY/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9tc3Bv/d2VydXNlci5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTkv/MDUvYXBwbGUtbG9n/by5wbmc",
        gift :"Amazon Gift",
        pay :"pay",
        desktop :"MacOS - Mobile"
    }
]
    return (
        <div className="PaymentCard">

            {/* <MobileDesktop/> */}
           {mobilPaymentData.map((e)=>(<PaymentItem data={e} key={e.id} />))}
    
        </div>
    )
}