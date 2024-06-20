
'use client';
import React from 'react'
import { BASE_URL } from '../../../db/url';

export default function deleteuser({userId}) {
    console.log("deleteuser",userId)
    const handledelete = async () =>{
        let response = await fetch(`${BASE_URL}users/${userId}`, {
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
