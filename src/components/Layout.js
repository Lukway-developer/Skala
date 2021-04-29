import Navbar from "./Navbar";
import Footer from "./Footer";
import { useState } from "react";
import BuyContainer from "./BuyContainer";

const Layout = ({ children, currentPage }) => {
  const [showBuys, setShowBuys] = useState(false)

  const handleShowBuys = () => {
    if(showBuys) setShowBuys(false)
    else setShowBuys(true)
  }

  return (
    <>
      <Navbar currentPage={currentPage} handleShowBuys={handleShowBuys}/>
      {showBuys
        ? <BuyContainer handleShowBuys={handleShowBuys}/>
        : <></>
      }
      {children}
      <Footer />
    </>
  );
}

export default Layout;
