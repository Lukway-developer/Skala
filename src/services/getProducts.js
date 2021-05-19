const apiURL = "https://skala-api.herokuapp.com/"

// Test with Promise
// export default function getProducts () {
//   return fetch(apiURL)
//   .then(response => response.json())
//   .then(response => {
//     const {products = []} = response
//     console.log(products)
//     return products
//   })
// }

// Test with Async/Await
const getProducts = async () => {
  let data = await fetch(apiURL)
  const {products = []} = await data.json()
  return products
}

export default getProducts
