"use client";
import React, { useState, useEffect } from "react";
import getProduct from "../../../services/getProduct";
import Link from "next/link";
import styles from "./product.module.css";
import DeleteButton from "./component/deleteButton";

// export const revalidate = 10;

export default  function ProductPage() {
  // const productListData = await getProduct();

  // const products =await productListData;

  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const productListData = await getProduct();
      setProducts(productListData);
    };
    fetchProducts();
  }, []);
  return (
    <div>
      <h1>Product List</h1>

      <table className={styles.product_table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Color</th>
            <th>Company</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map((product, index) => {
              return (
                <tr key={index}>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.color}</td>
                  <td>{product.company}</td>
                  <td>
                    {" "}
                    <Link href={`products/${product._id}`}>
                      {" "}
                      <button className={styles.edit_button}>Update </button>
                    </Link>
                  </td>

                  <td>
                    <DeleteButton productId={product._id} />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

// export async function getServerSideProps() {
//     const products = await getProduct()

//     return {
//         props: {
//             products
//         }
//     }
// }
