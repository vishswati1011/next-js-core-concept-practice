import { BASE_URL } from "../src/db/url";
export default async function getProduct() {
  let response = await fetch(`${BASE_URL}/products`
    //   , {
    //     cache: "no-store",
    //     next: { revalidate: 3600 },
    //   }
    );
    if (!response.ok) {
        throw new Error('Failed to fetch products');
    }
    response = await response.json();
    return response.result;
  // if(data.suceess){
  //     return data.result;
  // }
//   return data.result;
}
