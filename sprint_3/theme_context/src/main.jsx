import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import{ChakraProvider} from "@chakra-ui/react"
import{ThemeProvider} from "./Context/ThemeContext"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <ThemeProvider>
       <App />
      </ThemeProvider>
    </ChakraProvider>
  </React.StrictMode>
)
