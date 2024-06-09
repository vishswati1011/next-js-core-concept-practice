import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <div>
        <h1>
            This about page is not available
            <br/>
        
            <Link href="/">Go to home</Link>
        </h1>
    </div>
  )
}
