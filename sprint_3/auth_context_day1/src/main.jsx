import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import{ChakraProvider} from "@chakra-ui/react"
import { AuthProvider } from './Context/AuthContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
    <AuthProvider>
      <App />
     </AuthProvider>
    </ChakraProvider>
  </React.StrictMode>
)
