import { useContext } from 'react';
import { useMercadopago } from 'react-sdk-mercadopago';
import BuyContext from "services/BuyContext";

const MercadoPagoButton = ({totalPrice}) => {
  const {buyProducts} = useContext(BuyContext)
  let ordenData
  let preferenceId
  let urlCheckout

  // Get credentials from Mercado Pago
  const mercadopago = useMercadopago.v2('TEST-cfadf92b-9875-4fd4-864a-a506abc522dd', {
    locale: 'es-AR'
  })

  // Set data from buy items
  const handleUpdateOrdenData = () => {
    ordenData = buyProducts.map(product => ({
      id: product.id,
      title: `Crema Skala - ${product.title}`,
      description: product.description,
      unit_price: product.price,
      currency_id: 'ARS',
      quantity: product.quantity
    }))
  }

  // Get Id and Checkout Url from Preference
  const handleGetPreferenceData = async () => {
    // Send data to server
    await fetch("https://skala-api.herokuapp.com/create_preference", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ordenData)
    })
    .then(res => res.json())
    .then(res => {
      console.log(res)
      preferenceId = res.id
      urlCheckout = res.urlCheckout
      return
    })
    .catch(() => {
      alert("Unexpected error");
    });
  }

  const handleCompleteBuy = async () => {
    handleUpdateOrdenData()
    await handleGetPreferenceData()

    // Set preference id and generate
    mercadopago.checkout({
      preference: {
        id: preferenceId
      },
    })

    window.open(urlCheckout, '_blank');
  }

  return (
    <div className="mercadopago_container">
      <span className="mercadopago_price">Total a pagar ${totalPrice} ARS</span>

      <button className="mercadopago_button" onClick={handleCompleteBuy}>
        <img className="mercadopago_logo" src="./images/MercadoPago.svg" alt="Pagar con Mercado Pago"/>
      </button>
    </div>
  )
}

export default MercadoPagoButton;
