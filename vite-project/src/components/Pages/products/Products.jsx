import React, { useEffect, useState } from 'react'
import ProductCard from '../../ProductCard';
import Loading from '../../Loading';



export default function Products() {
    const [isloading, setIsloading] = useState(true);
    const [products, setproducts] = useState([])
    console.log(products);
    
    const fenchproductsapi = async() =>{
        try {
            const res = await fetch("https://fakestoreapi.com/products")
            // const finalRes = await res.json();
            // setPosts(finalRes||[]);
            console.log(res);
            if(res.status !== 200) {
                setproducts([]);
            }
            else{
                const finalRes = await res.json();
            setproducts(finalRes||[]);
            setIsloading(false)
            }
        } catch (error) {
            console.log(error);
            
        }
   
    }
   useEffect(() => {
    fenchproductsapi();
   },[])
  return (
    <div className='products-container'>
        {isloading&&<Loading/>}
    {products?.map((product)=><ProductCard key={product.id} title={product.title} desc={product.body} id={product.id} price={product.price} category={product.category} image={product.image} rating={product.rating.rate}/>  )}
      
    </div>
  )
}
