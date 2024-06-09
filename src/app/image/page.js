"use client";
import React from 'react'
import styles from './styles.module.css';
export default function Image() {

    const [file, setFile] = React.useState(null);

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('image',file);
        const response = await fetch('http://localhost:3000/api/image',{
            method:'POST',
            body:formData
        })
        const data = await response.json();
        if(data.success){
            alert('File uploaded successfully')
        }

    }
  return (
    <div>

        <h1>
            Image Page
        </h1>

        <form className={styles.images_form} onSubmit={(e)=>handleSubmit(e)}>
            <input className={styles.images_form_input} type="file" name="image" id="image" 
            onChange={(e)=>setFile(e.target.files?.[0])}/>
            <button type="submit">Upload</button>
        </form>
      
    </div>
  )
}
