import { BuyContext } from "services/BuyContext"
import Home from "containers/Home";
import About from "containers/About";
import Products from "containers/Products";
import Layout from "components/Layout";

const App = () => {
  return (
    <BuyContext>
      <Layout>
        <Home />
        <Products />
        <About />
      </Layout>
    </BuyContext>
  );
}

export default App;
