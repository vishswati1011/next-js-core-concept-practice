"use client";
import { useState,useEffect } from "react"


// data fetch in client component
export default function ProductList() {

    const [products, setProducts] = useState([]);
   
    useEffect(() => {
        async function fetchData() {
          let data = await fetch('https://dummyjson.com/products');
          data = await data.json();
          setProducts(data.products);
        }
        fetchData();
      }, []);

  return (
    <div>
      <h1>Product List</h1>
 
        {products && products?.map((product, index) => ( 
            <div key={index}>
               Product {index+1} : {product.title} , Price {product.price} <br/>
            </div>
        ))}

    </div>
  )
}
