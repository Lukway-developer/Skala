// import Promo from "../components/Promo";
import { useEffect, useState } from "react";
import Layout from "components/Layout";
import Filter from "components/Filter";
// import Leafs from "components/Leafs";
import ProductItem from "components/ProductItem";
import getProducts from "services/getProducts";
import ContactPopUp from "components/ContactPopUp";

const Products = () => {
  const [data, setData] = useState([])
  const [contact, showContact] = useState(false)
  const [category, setCategory] = useState("all")

  useEffect(() => {
    getProducts().then(products => setData(products))
  }, [])

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
  // let leaftQuantity = products.length / 3
  return (
    <Layout currentPage="Products">
      {contact
        ? <ContactPopUp handleHideContact={handleHideContact} />
        : <></>
      }
      <section className="products">
        {/* <Promo/> */}
        <Filter handleSetCategory={handleSetCategory}/>
        {/* <Leafs quantity={leaftQuantity}/> */}
        <div className="products_container">
        {category === "all"
          ? data.map(product =>
              <ProductItem
                key={product.id}
                data={product}
                handleShowContact={handleShowContact}
              />
            )
          : data
            .filter(product => product.category === category)
            .map(product =>
              <ProductItem
                key={product.id}
                data={product}
              />
            )
        }
        </div>
      </section>
    </Layout>
  );
}

export default Products;
