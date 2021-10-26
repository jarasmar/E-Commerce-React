import React from "react";

function ProductsList() {
  return (
    <ul className="products-list">
      <li>
        <span className="product-name">Product A</span>
        <span className="product-price">£ 10</span>
        <button className="buy-btn">Buy</button>
      </li>
      <li>
        <span className="product-name">Product B</span>
        <span className="product-price">£ 10</span>
        <button className="buy-btn">Buy</button>
      </li>
      <li>
        <span className="product-name">Product C</span>
        <span className="product-price">£ 10</span>
        <button className="buy-btn">Buy</button>
      </li>
      <li>
        <span className="product-name">Product D</span>
        <span className="product-price">£ 10</span>
        <button className="buy-btn">Buy</button>
      </li>
      <li>
        <span className="product-name">Product E</span>
        <span className="product-price">£ 10</span>
        <button className="buy-btn">Buy</button>
      </li>
    </ul>
  );
}

export default ProductsList;
