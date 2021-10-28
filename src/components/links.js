import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BasketContext } from "../contexts/basket_context";

function Links() {
  const { state } = useContext(BasketContext);
  return (
    <div className="links">
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/basket">
        {state.items > 0 ? "(" + state.items + ") " : ""}Basket
      </Link>
    </div>
  );
}

export default Links;
