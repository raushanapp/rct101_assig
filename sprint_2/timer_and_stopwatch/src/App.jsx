import { useState ,React} from 'react'
import './App.css'
import { StopWatchGoogle } from './Components/StopWatch'
import {  TimerGoogle } from './Components/Timer'

function App() {
   const [show,setShow] =useState(true)
  return (
    <div className="App">
       <TimerGoogle/>
       <StopWatchGoogle/>
    </div>
  )
}

export default App
