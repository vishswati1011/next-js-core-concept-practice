"use client";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function Home() {
  const router = useRouter();
  return (
    <main>
    <h1> Home Page</h1>
    <div className={styles.button_div}>
      <button className={styles.button}  onClick={()=>router.push('/login')}>Login</button>
      <button className={styles.button} onClick={()=>router.push('/about')}>about</button>
      <button className={styles.button} onClick={()=>router.push('/productlist')}>Client component</button>
      <button className={styles.button} onClick={()=>router.push('/addproduct')}>Add Product DB</button>
   
    </div>
    <div className={styles.button_div}>
      <button className={styles.button} onClick={()=>router.push('/products')}>Product page DB</button>
      <button className={styles.button} onClick={()=>router.push('/product')}>server component</button>
      <br/>
      <button className={styles.button} onClick={()=>router.push('/user')}>generateStaticParams</button>

      <button className={styles.button} onClick={()=>router.push('/users')}>User API Routes</button>

    </div>

    <div className={styles.button_div}>
      <button className={styles.button} onClick={()=>router.push('/image')}>upload image</button>
     
    </div>
    </main>
  );
}
