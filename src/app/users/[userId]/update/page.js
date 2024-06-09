'use client';
import React, { useEffect } from "react";
import {getUsersByIdApiRoutes} from '../../../../../services/getUsersByApiRoutes'
export default function EditUser({params}) {

    let id = params.userId;

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
    useEffect(()=>{

        async function getUserData(){
            let response = await getUsersByIdApiRoutes(id);
            setInputValue({
                name: response.userdata.name,
                email: response.userdata.email,
                age: response.userdata.age
            });
        }
        getUserData();
    },[])
    
    const handleSubmit = async (e) =>{
        e.preventDefault();
        let response =  await fetch(`http://localhost:3000/api/users/${id}`, {
        
            method: 'PUT',
            body: JSON.stringify(inputValue),
            headers: {
              'Content-Type': 'application/json'
            }
          });

          response = await response.json();
          console.log(response,"put api called successfully. frontend")
    }
  return (
    <div >
        <h1>Update User</h1>
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
