"use client";
import Link from "next/link";

export default function About() {
  return (
    <div>
      This is about page
      <br />
      <Link href="/">
        <button>Go to home</button>
      </Link>
    </div>
  );
}
