import { useContext, useEffect, useState } from "react";
import BuyContext from "services/BuyContext";
import BuyItem from "components/BuyItem";
import MercadoPagoButton from "./MercadoPagoButton";

const BuyContainer = ({handleShowBuys}) => {
  const {buyProducts} = useContext(BuyContext)
  const [totalPrice, setTotalPrice] = useState([])

  // If the amount of products change, update total price
  useEffect(()=>{
    handleUpdateTotalPrice()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [buyProducts])

  const handleUpdateTotalPrice = () => {
    let currentTotalPrice = buyProducts.reduce((accumulator, product) => accumulator + (product.price * product.quantity),0)
    setTotalPrice(currentTotalPrice)
  }

  let haveProducts = buyProducts.length > 0 ? true : false

  return (
    <div className="buy_container" >
      <div className="buy_card">
        {
          haveProducts
            ? <>
                <h2 className="buy_card_title">Tu Carrito</h2>
                <div className="buy_item_container">
                  {buyProducts.map(product =>
                    <BuyItem key={product.id} data={product} handleUpdateTotalPrice={handleUpdateTotalPrice} />
                  )}
                </div>
              </>
            : <>
                <h2 className="buy_card_title">¡Tu carrito esta vacío! 😢</h2>
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
            ? <MercadoPagoButton totalPrice={totalPrice}/>
            : <></>
        }
      </div>
    </div>
  );
}

export default BuyContainer;
