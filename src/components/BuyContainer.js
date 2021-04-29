import { useContext, useEffect, useState } from "react";
import BuyContext from "services/BuyContext";
import BuyItem from "components/BuyItem";

const BuyContainer = ({handleShowBuys}) => {
  const {buyProducts, setBuyProducts} = useContext(BuyContext)
  const [totalPrice, setTotalPrice] = useState([])

  useEffect(()=>{
    let updateTotalPrice = buyProducts.reduce((accumulator, product) => accumulator + (product.price * product.quantity),0)
    setTotalPrice(updateTotalPrice)
  }, [buyProducts])

  const handleUpdateTotalPrice = () => {
    let updateTotalPrice = buyProducts.reduce((accumulator, product) => accumulator + (product.price * product.quantity),0)
    setTotalPrice(updateTotalPrice)
  }

  const handleCompleteBuy = () => {
    let orderData = buyProducts.map(product =>
      product = {
        'quantity': product.quantity,
        'description': product.description,
        'price': product.price
      }
    );
    console.log(orderData)

    fetch("http://localhost:3001/create_preference", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    })
      .then(function(response) {
        console.log("Post realizado")
          return response.json();
      })
      .catch(function() {
        alert("Unexpected error");
      });
  }
  // const handleUpdateTotalPrice = () => {
  //   let newTotalPrice = buyProducts.reduce((accumulator, product) => accumulator + (product.price * product.quantity),0)
  //   setTotalPrice(newTotalPrice)
  // }

  let haveProducts = buyProducts.length > 0 ? true : false

  return (
    <div className="buy_container" >
      <div className="buy_card">
        {
          haveProducts
            ? <>
                <h2 className="buy_card_title">Tus Productos</h2>
                <div className="buy_item_container">
                  {buyProducts.map(product =>
                    <BuyItem key={product.id} data={product} handleUpdateTotalPrice={handleUpdateTotalPrice} />
                  )}
                </div>
              </>
            : <>
                <h2 className="buy_title-empty">¡Tu carrito esta vacío! 😢</h2>
                <h3 className="buy_text-empty">Selecciona uno de nuestros excelentes productos</h3>
                <button className="buy_button-empty" onClick={handleShowBuys}>
                  Ver los productos <i className="fas fa-arrow-alt-circle-right" />
                </button>
              </>
        }

        <button className="buy_button-close" onClick={handleShowBuys}>
          <i className="fas fa-times" />
        </button>

        {
          haveProducts
            ? <button className="buy_button-submit" onClick={handleCompleteBuy}>
                Comprar ${totalPrice}
              </button>
            : <></>
        }
      </div>
    </div>
  );
}

export default BuyContainer;
