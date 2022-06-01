import { useContext, useState } from 'react'
import './App.css'
import { ThemeToggle } from './Components/ThemeContext'
import { ThemeContext } from './Context/ThemeContext'

function App() {
  const {isTheme} = useContext(ThemeContext)

  return (
    <div className={isTheme ? "light" :"dark"}>
       <ThemeToggle/>
    </div>
  )
}

export default App
