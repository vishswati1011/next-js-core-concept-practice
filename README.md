This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
# What is rendering 

code will cover in html part to view on brawser
type type it is 
client side :code render on brawser side
server side : code render on server side and return html


Pre-rendering 
Generate Html in advance on the server side
comes into server side render means render before load on brawser
Pre-rendering two type
1. static Generation
    With static Rendering both server and client component  can be prerendered on the server at build time
    The HTML is generated at build time and is reused for each request

2. SSR
    The HTML is generted when user request.


Fetch data in client component

we can use useEffect and useState

Fetch data in server component
we can create function and call it in server component to fetch data

Ex: 
we can create a productList function and then call it into server component 

export default async function Product() {

    let products = await productList();
    console.log(products,"product")

  return (
    <div>
        <h1>Product Page with server component</h1>
        {
            products && products?.map((product, index) => ( 
                <h5 key={index}>
                   Name : {product.title} , Price {product.price} <br/>
                   <br/>
                </h5>
            ))
        }
    </div>
  )
}


#  Why  do we need a Client component inside server component ?


# catch all api routes in next js

make a folder [...student]   in api folder and inside it a file routes.js
and right api function in it
