import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar';
import { Offers } from './Components/Offers';
import { Restaurants } from './Components/Restaurants';
import { Filters } from './Components/Filters';
import userInfo from "./Data/userInfo.json"
import offers from "./Data/offers.json"
import restaurants from "./Data/restaurants.json"
import { useState } from 'react';
const filters = {
  1:"Cost High to Lost",
  2: "Cost Lost to High",
  3:"Ratings",
  4:"Delivery Time",
  5:"Relevance"
}

function App() {
  const [filterBy,setFilterBy] = useState("");
  const [data,setData] = useState(restaurants)

  const updateFilter = (newFilter) =>{
      console.log(newFilter)
      switch(newFilter) {
        case "1" : {
           setFilterBy(1)
             data.sort((a,b)=>b.cost_for_two-a.cost_for_two);
             setData([...data])
           break;
        }
        case "2" : {
          setFilterBy(2)
            data.sort((a,b)=>a.cost_for_two-b.cost_for_two);
            setData([...data])
          break;
       }
       case "3" : {
        setFilterBy(3)
          data.sort((a,b)=>b.rating-a.rating);
          setData([...data])
        break;
     }
        default :{
          setData(restaurants);
          break;
        }
      }
  }

  return (
    <div>
      <Navbar {...userInfo.Locations}/>
      <Offers offers={offers}/>
    <section className="near-you">
      <Filters currentByFilter ={filterBy} updateFilter={updateFilter} filters={filters}/>
      <Restaurants restaurants={data}/>

    </section>
    </div>
  );
}

export default App;
