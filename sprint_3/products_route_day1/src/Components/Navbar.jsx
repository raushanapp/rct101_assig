
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>Navbar
        <Link to='/'>Home</Link>
        <Link to='/Products'>Products</Link>
        <Link to='/Product'>Product</Link>
    </div>
  )
}

export default Navbar