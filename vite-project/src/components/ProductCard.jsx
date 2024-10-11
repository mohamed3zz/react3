import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard({ id, title, price , image , desc, category}) {
  return (
    <Link to={`/products/articles/${id}/${title}`} className='product-card'>
      <div className='product-image-container'>
      <img className='product-image' src={image}></img></div>
      <h4>{title}</h4>
    </Link>
  )
}
