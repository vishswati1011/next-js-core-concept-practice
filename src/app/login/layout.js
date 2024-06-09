import React from 'react'
import styles from './page.module.css'

export default function layout({children}) {
  return (
    <div>
        <ul className={styles.navbar}>
            
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/login">Login</a>
            </li>
            <li>
                <a href="/login/studentlogin">Student Login</a>   
            </li>
            <li>
                <a href="/login/teacherlogin">Teacher Login</a>
            </li>

        </ul>
        
        <div className={styles.main_content}>
             {children}

        </div>
    </div>
  )
}
