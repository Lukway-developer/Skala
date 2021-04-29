import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BuyContext } from "services/BuyContext"
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <BuyContext>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/products" component={Products} />
        </BuyContext>
      </Switch>
    </Router>
  );
}

export default Routes;
