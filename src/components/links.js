import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BasketContext } from "../contexts/basket_context";

function Links() {
  const { items } = useContext(BasketContext);
  return (
    <div className="links">
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/basket">{items > 0 ? "(" + items + ") " : ""}Basket</Link>
    </div>
  );
}

export default Links;
