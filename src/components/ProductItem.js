import { useContext, useEffect, useState } from "react";
import BuyContext from "services/BuyContext";
import ProductCheck from "components/ProductCheck";
import ProductOnFire from "./ProductOnFire";


const ProductItem = ({ data, handleShowContact }) => {
  const {buyProducts, setBuyProducts} = useContext(BuyContext)
  const [check, setCheck] = useState(false)

  //Check if the item is in the Bag
  useEffect(
    () => {
      let productBuying = buyProducts.find(product => product.id === data.id)
      if(productBuying) {
        setCheck(true)
      }
      else {
        setCheck(false)
      }
    },
    [buyProducts, buyProducts.length, data.id]
  )

  const handleAddProduct = () => {
    //Verify that the item has not been previously selected
    let productBuying = buyProducts.find(product => product.id === data.id)
    let productsQuantity = buyProducts.length

    if(!productBuying || productsQuantity === 0) {
      if(productsQuantity < 5) {
        // Show Check
        setCheck(true)

        //Add and Sort Products
        let addProduct = [
          ...buyProducts,
          data
        ]
        setBuyProducts(
          addProduct.sort((productA, productB) => productA.id - productB.id)
        )
      }
      else {
        handleShowContact()
        console.log("hola")
      }
    }
  }

  return (
    <div className="products_card">
      {
        data.onfire
        ? <ProductOnFire />
        : <></>
      }
      {
        check
        ? <ProductCheck quantity={buyProducts.length}/>
        : <></>
      }

      <h3 className="products_price">
        <span className="products_price-number">{data.price} </span>
        ARS
      </h3>

      <img
        className="products_image"
        src={data.image}
        alt={"Skala - " + data.title}
        title={"Skala - " + data.title}
      />

      <div className="products_text_container">
        <h3 className="products_title">{data.title}</h3>

        <p className="products_description">{data.description}</p>

        <div className="products_button_container">
          <button className="products_button" onClick={handleAddProduct}>
            Añadir al carrito <i className="fas fa-cart-plus" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductItem
