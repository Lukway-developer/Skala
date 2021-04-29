import { useState, useEffect } from "react";
import getProducts from "services/getProducts";

const Slider = () => {
  const [data, setData] = useState([])
  const [countState, setCountState] = useState(0)

  useEffect(() => {
    getProducts().then(products => {
      setData(products)
      handleChangeImage(products)
    })
  }, []);

  const handleChangeImage = (items) => {
    let counter = 0;
    setInterval(() => {
      if(counter === items.length - 1){
        counter = 0
        setCountState(counter)
      }
      else {
        counter++
        setCountState(counter)
      }
    }, 3000)
  }

  return (
    <div className="slider">
      {data
        .filter(product => product.id === countState)
        .map(product => (
          <>
            <h3
              // key={product.id}
              className="slider_title">
              {product.title}
            </h3>
            <img
              // key={(product.id + data.length + 1)}
              className="slider_img"
              src={product.image}
              alt={product.title}
              title={product.title}
            />
          </>
        ))
      }
      <div className="slider_counter">
        {
          data.map(product =>
            (countState === product.id)
              ? <span key={product.id} className='counter-current'><i className='fas fa-circle' /></span>
              : <span key={product.id} className='counter '><i className='fas fa-circle' /></span>
          )
        }
      </div>
    </div>
  );
}

export default Slider;
