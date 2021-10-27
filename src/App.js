import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Nav, Footer } from "./components";
import { Home, Products, Basket } from "./pages";
import { ProductsContextProvider } from "./contexts";

function App() {
  return (
    <div className="App">
      <ProductsContextProvider>
        <Router>
          <Nav />
          <Switch>
            <Route path="/" exact component={() => <Home />} />
            <Route path="/products" exact component={() => <Products />} />
            <Route path="/basket" exact component={() => <Basket />} />
          </Switch>
          <Footer />
        </Router>
      </ProductsContextProvider>
    </div>
  );
}

export default App;
