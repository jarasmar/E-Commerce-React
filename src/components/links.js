import React from "react";
import { Link } from "react-router-dom";

function Links() {
  return (
    <div className="links">
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/basket">Basket</Link>
    </div>
  );
}

export default Links;
