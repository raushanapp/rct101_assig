import { useState } from 'react'
import './App.css'
import { ThemeToggle } from './Components/ThemeContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
       <ThemeToggle/>
    </div>
  )
}

export default App
