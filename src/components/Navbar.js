import { useContext } from "react";
import { Link } from "react-router-dom";
import BuyContext from "services/BuyContext";

const Navbar = ({currentPage, handleShowBuys}) => {
  let isHome = false
  let isAbout = false
  let isProducts = false
  switch (currentPage) {
    case "Home":
      isHome = true
      break
    case "About":
      isAbout = true
      break
    case "Products":
      isProducts = true
      break
    default:
      break
  }

  const {buyProducts, setBuyProducts} = useContext(BuyContext)

  return (
    <nav className="nav">
      <img className="nav_logo" src="./images/brand/Skala - Logo.svg" alt="Skala Logo" />
      <div className="nav_button_container">
        {isHome
          ? <Link className="nav_button current_page" to="/">Home</Link>
          : <Link className="nav_button" to="/">Home</Link>
        }
        {isAbout
          ? <Link className="nav_button current_page" to="/about">Sobre Nosotros</Link>
          : <Link className="nav_button" to="/about">Sobre Nosotros</Link>
        }
        {isProducts
          ? <Link className="nav_button current_page" to="/products">Productos</Link>
          : <Link className="nav_button" to="/products">Productos</Link>
        }
      </div>
      <button className="nav_shop" onClick={handleShowBuys}>
        <i className="fas fa-shopping-bag" />
        {buyProducts.length > 0
          ? <span className="nav_shop-counter">{buyProducts.length}</span>
          : <></>
        }
      </button>
    </nav>
  );
}

export default Navbar;
