import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Nav, Footer } from "./components";
import { Home, Products, Basket, ThankYou } from "./pages";
import { ProductsContextProvider, BasketContextProvider } from "./contexts";

function App() {
  return (
    <div className="App">
      <ProductsContextProvider>
        <BasketContextProvider>
          <Router>
            <Nav />
            <Switch>
              <Route path="/" exact component={() => <Home />} />
              <Route path="/products" exact component={() => <Products />} />
              <Route path="/basket" exact component={() => <Basket />} />
              <Route path="/thankyou" exact component={() => <ThankYou />} />
            </Switch>
            <Footer />
          </Router>
        </BasketContextProvider>
      </ProductsContextProvider>
    </div>
  );
}

export default App;
