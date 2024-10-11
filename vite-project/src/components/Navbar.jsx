import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='navbar'>
    <NavLink to={"/"}>Home</NavLink>
    <NavLink to={"/products"}>Products</NavLink>
    </nav>
  )
}
