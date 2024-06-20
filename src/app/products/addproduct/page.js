"use client";
import React , {useState,useEffect } from 'react';
import styles from './addproduct.module.css';
import { BASE_URL } from '../../../db/url';
export default function Addproduct() {

    const [inputValue, setInputValue] = useState({
        name:'',
        price:'',
        color:'',
        company:'',
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputValue);
        fetch(`${BASE_URL}products`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(inputValue)
        }).then(res=>res.json())
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
        <h1>Add New Product</h1>
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

        <button type="submit">Add Product</button>
        </form>
        </div>
    </div>
  )
}
