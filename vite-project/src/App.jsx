import React from 'react'
import "./styles/main.css"

import { RouterProvider } from 'react-router-dom'
import { Routing } from './variables/Routing'
export default function App() {
  
  return <RouterProvider router={Routing} />
}
