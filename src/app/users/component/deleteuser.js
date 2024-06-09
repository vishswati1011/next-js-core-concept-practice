
'use client';
import React from 'react'

export default function deleteuser({userId}) {
    console.log("deleteuser",userId)
    const handledelete = async () =>{
        let response = await fetch(`http://localhost:3000/api/users/${userId}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json'
            }
          });
          response = await response.json();
          if(response.success){
            alert("user delete successfully")
          }
    }

  return (
    <button onClick={()=>handledelete()}>delete</button>
  )
}
