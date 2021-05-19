import { useState, useContext } from "react";
import BuyContext from "services/BuyContext";

const BuyItem = ({data, handleUpdateTotalPrice}) => {
  const [quantity, setQuantity] = useState(data.quantity)
  const {buyProducts, setBuyProducts} = useContext(BuyContext)

  const handleMinusQuantity = () => {
    if(quantity !== 1) {
      setQuantity(quantity - 1)
      addQuantity(quantity - 1)
      handleUpdateTotalPrice()
    }
  }
  const handlePlusQuantity = () => {
    if(quantity !== data.lenght - 1) {
      setQuantity(quantity + 1)
      addQuantity(quantity + 1)
      handleUpdateTotalPrice()
    }
  }

  const handleDeleteProduct = () => {
    setBuyProducts(buyProducts.filter(product => product.id !== data.id))
  }

  const addQuantity = (currentQuantity) => {
    // Catch current product and his index
    let currentProduct = buyProducts.find(product => product.id === data.id)
    let indexCurrentProduct = buyProducts.indexOf(currentProduct)

    currentProduct = {
      ...currentProduct,
      'quantity': currentQuantity
    }

    // Update context
    buyProducts.splice(indexCurrentProduct, 1, currentProduct)
  }

  return (
    <div className="buy_item">

      <img
        className="buy_img"
        src={data.image}
        alt={data.title}
        title={data.title}
      />
      <h3 className="buy_title">{data.title}</h3>

      <button className="buy_button-trash" onClick={handleDeleteProduct}>
        <i className="fas fa-times" />
      </button>

      <div className="buy_panel">
        <div className="buy_price_container">
          <span className="buy_price">{data.price * quantity}</span>
          <span className="buy_coin">ARS</span>
        </div>

        <div className="buy_buttons_container">
          <button className="buy_button-minus" onClick={handleMinusQuantity}>
            <i className="fas fa-minus" />
          </button>
          <div className="buy_quantity_container">
            <span className="buy_quantity">{quantity}</span>
          </div>
          <button className="buy_button-plus" onClick={handlePlusQuantity}>
            <i className="fas fa-plus" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default BuyItem;
