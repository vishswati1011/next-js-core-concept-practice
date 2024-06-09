'use client';
import React from "react";

export default function AddUser() {
    const [inputValue, setInputValue] = React.useState({
        name: '',
        email: '',
        age: ''
    })
    const handleChange = (event) =>{
        setInputValue({
            ...inputValue,
            [event.target.name]: event.target.value
        })
    }
    const handleSubmit = async (e) =>{
        e.preventDefault();
        let response =  await fetch('http://localhost:3000/api/users', {
        
            method: 'POST',
            body: JSON.stringify(inputValue),
            headers: {
              'Content-Type': 'application/json'
            }
          });

          response = await response.json();
          console.log(response,"api called successfully. frontend")
    }
  return (
    <div >
        <h1>Add New User</h1>
        <form onSubmit={(e)=>handleSubmit(e)}>
            <input type="text" value={inputValue.name} placeholder='Enter Name' name="name" onChange={(e)=>handleChange(e)} />
            <br/>
            <input type="email" value={inputValue.email} placeholder='Enter Email' name="email" onChange={(e)=>handleChange(e)} />
            <br/>
            <input type="age" value={inputValue.age} placeholder='Enter Age' name="age" onChange={(e)=>handleChange(e)} />
            <br/>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}
