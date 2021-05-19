// import Promo from "../components/Promo";
import { lazy, Suspense, useEffect, useState } from "react";
import getProducts from "services/getProducts";
import Filter from "components/Filter";
// import Leafs from "components/Leafs";
import ContactPopUp from "components/ContactPopUp";
import Loader from "components/Loader";
const ProductItem = lazy(() => import ("components/ProductItem"));

const Products = () => {
  const [data, setData] = useState([])
  const [category, setCategory] = useState("all")
  const [contact, showContact] = useState(false)
  const [showToTop, setShowToTop] = useState(false)

  useEffect(() => {
    // Test with Promise
    // getProducts().then(products => setData(products))

    // Test with Async/Await
    const fetchProducts = async () => {
      try{
        let products = await getProducts()
        setData(products)
      }
      catch (error){
        console.error(error);
      }
    }

    fetchProducts()
  }, [])

  //Detect if enough scrolling was done to show the "Button to Top"
  window.onscroll = () => {
    let products = document.getElementById("products");
    let y = products.offsetTop + 100
    let scrollY = window.scrollY
    let mediaquery = window.matchMedia("(max-width: 768px)")

    if (scrollY >= y && mediaquery.matches){
      setShowToTop(true)
    } else {
      setShowToTop(false)
    }
  }

  const handleSetCategory = (e) => {
    let newCategory = e.target.value
    setCategory(newCategory)
  }
  const handleShowContact = () => {
    showContact(true)
  }
  const handleHideContact = () => {
    showContact(false)
  }
  const handleScrollToProducts = () => {
    let products = document.getElementById("products");
    let y = products.offsetTop
    window.scrollTo(0, y)
  }

  // let leaftQuantity = products.length / 3
  return (
    <>
      {contact
        ? <ContactPopUp handleHideContact={handleHideContact} />
        : <></>
      }
      <section id="products" className="products">
        {/* <Promo/> */}
        <Filter handleSetCategory={handleSetCategory}/>
        {/* <Leafs quantity={leaftQuantity}/> */}
        <div className="products_container">

          {category === "all"
            ? data.map(product =>
              <Suspense key={product.id} fallback={<Loader />}>
                <ProductItem
                  key={product.id}
                  data={product}
                  handleShowContact={handleShowContact}
                />
              </Suspense>
              )
            : data
              .filter(product => product.category === category)
              .map(product =>
                <Suspense key={product.id} fallback={<Loader />}>
                  <ProductItem
                    key={product.id}
                    data={product}
                  />
                </Suspense>
              )
          }

          {showToTop
            ?
              <button className="products_button-to-top" onClick={handleScrollToProducts}>
                <i className="fas fa-chevron-up"></i>
              </button>
            : <></>
          }
        </div>
      </section>
    </>
  );
}

export default Products;
