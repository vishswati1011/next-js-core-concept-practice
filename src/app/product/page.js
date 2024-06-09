 
import PriceButton from './PriceButton';
// server component
async function productList () {

    let data = await fetch('https://dummyjson.com/products');
    data = await data.json();
    return data.products;

}
export default async function Product() {

  let products = await productList();

  return (
    <div>
        <h1>Product Page with server component</h1>
        {
            products && products?.map((product, index) => ( 
                <h5 key={index}>
                   Name : {product.title} , Price {product.price} <br/>
                   <br/>
                   <PriceButton price={product.price}/>
                </h5>
            ))
        }
    </div>
  )
}
