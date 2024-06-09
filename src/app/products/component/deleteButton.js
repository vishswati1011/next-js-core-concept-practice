'use client';
import styles from './style.module.css';
import React from 'react'

function deleteButton({productId}) {


    const handeleDelete = (e) => {
        const result = fetch(`http://localhost:3000/api/products/${productId}`, {
            method: 'DELETE',
            headers:{
                'Content-Type':'application/json'
            }
        })
        if(result.success){
            alert('Product Deleted Successfully');
        }
    }
  return (
    <button className={styles.delete_button} onClick={(e)=>handeleDelete(e)}>Delete</button>
  )
}

export default deleteButton;