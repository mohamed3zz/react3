import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Singleproduct() {
//     const {title,id,category} = useParams();
    // const [SinglePost,setSinglePost] = useState({})
const [Singleproduct,setSingleproduct] = useState({})
const {id,category,title,image,desc,price,rating} = useParams()


const fetchsingleapi = async() => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`)
    const finalRes = await res.json();
    setSingleproduct(finalRes);


    }
    
    // console.log(finalRes);
    



    console.log(id);
    useEffect(() => {
        fetchsingleapi();
    },[])
    
    // const x = useParams();
    // console.log(x);
    
  return (
   <div className='singleproduct'>
    <div className='singleproduct-image'>
    <img src={Singleproduct.image}></img>
    </div>
    <div className='singleproduct-content'>
    <h1>{Singleproduct.category}</h1>
    <h1>{Singleproduct.price}</h1>
    <div class="add-to-cart">
            <div class="wrapper">
                <button class="minus">-</button>
                <span class="number">01</span>
                <button class="plus">+</button>
            </div>
            <div class="add-to-cart-button">
                <button>ADD TO CART</button>
            </div>
            </div>
 <h3>Product Details</h3>
   <p>{Singleproduct.description}</p>
 
   </div>
   </div>
  )
}