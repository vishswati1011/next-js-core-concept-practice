"use client";
import React , {useState,useEffect } from 'react';
import styles from '../addproduct/addproduct.module.css';
import {useRouter} from 'next/navigation';
import { BASE_URL } from '../../../db/url';
export default function UpdateProduct({params}) {

    const router = useRouter();
    const [inputValue, setInputValue] = useState({
        name:'',
        price:'',
        color:'',
        company:'',
    });
    useEffect (()=>{
        async function fetchData(){
            const response = await fetch(`${BASE_URL}products/${params?.productId}`);
            const data = await response.json();
            setInputValue({
                name:data.result.name,
                price:data.result.price,
                color:data.result.color,
                company:data.result.company,
            })
        
        }
        fetchData();
    },[params.productId])
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputValue);
        fetch(`${BASE_URL}products/${params.productId}`,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(inputValue)
        }).then(res=>{
            router.push('/products')
        })
    }
    const handleChange = (e) => {
        setInputValue({
            ...inputValue,
            [e.target.name]:e.target.value
        })
    }
  return (
    <div className={styles.product_div}>
        <div className={styles.addproduct}>
        <h1>Update Product</h1>
        <form onSubmit={(e)=>{handleSubmit(e)}}>
        <input 
            type="text" 
            placeholder="Product Name" 
            name='name' 
            value={inputValue.name} 
            onChange={(e)=>{handleChange(e)}}
        />
        <input 
            type="number" 
            placeholder="Price" 
            name='price' 
            value={inputValue.price} 
            onChange={(e)=>{handleChange(e)}}
        />
        <input 
            type="text" 
            placeholder="Color" 
            name='color' 
            value={inputValue.color} 
            onChange={(e)=>{handleChange(e)}}
        />
        <input 
            type="text" 
            placeholder="Company" 
            name='company' 
            value={inputValue.company} 
            onChange={(e)=>{handleChange(e)}}
        />

        <button type="submit">Update Product</button>
        </form>
        </div>
    </div>
  )
}
