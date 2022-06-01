import { useState } from 'react'
import './App.css'
import Home from './Components/Home'
import {Routes,Route} from "react-router-dom"
import Products from './Components/Products'
import Product from './Components/Product'
import Navbar from './Components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
         <Navbar/>
         <Routes>
            <Route path='' element={<Home/>}/>
            <Route path='Products' element={<Products/>}/>
            <Route path='Products/:id' element={<Product/>}/>
            {/*  this is called nested route<Route path='Products/*' element={<Products/>}> 
             <Route path=':id' element={<Product/>}/>
            </Route> */}
         </Routes>
    </div>
  )
}

export default App
