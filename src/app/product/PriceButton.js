"use client";  
import React from 'react'

export default function product({price}) {
  return (
    <div>
        <button onClick={() => alert(price)} style={{padding:'10px', marginBottom:'10px'}}>
            Check Price</button>
    </div>
  )
}
