
const apiURL = "https://skala-api.herokuapp.com/"

export default function getProducts () {
  return fetch(apiURL)
    .then(response => response.json())
    .then(response => {
      const {products = []} = response
      return products
    })
}

