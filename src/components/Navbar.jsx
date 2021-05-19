import { useContext } from "react";
import BuyContext from "services/BuyContext";

const Navbar = ({handleShowBuys}) => {

  const { buyProducts } = useContext(BuyContext)

  return (
    <nav className="nav">
      <img className="nav_logo" src="./images/brand/Skala - Logo.svg" alt="Skala Logo" />

      <button className="nav_bag" onClick={handleShowBuys}>
        <i className="fas fa-shopping-bag" />
        {buyProducts.length > 0
          ? <span className="nav_bag-counter">{buyProducts.length}</span>
          : <></>
        }
      </button>
    </nav>
  );
}

export default Navbar;
