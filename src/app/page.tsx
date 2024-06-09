"use client";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function Home() {
  const router = useRouter();
  return (
    <main>
    <h1> Home Page</h1>
    <div className={styles.button_div}>
      <button className={styles.button}  onClick={()=>router.push('/login')}>Go to Login page</button>
      <button className={styles.button} onClick={()=>router.push('/about')}>Go to about page</button>
      <button className={styles.button} onClick={()=>router.push('/productlist')}>Go to Product page</button>

    </div>
    </main>
  );
}
