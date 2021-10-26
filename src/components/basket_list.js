import React from "react";

function BasketList() {
  return (
    <ul className="basket-list">
      <li>
        <span className="product-name">Product A</span>
        <span className="product-price">£ 10</span>
        <button className="remove-btn">Remove</button>
      </li>
      <li>
        <span className="product-name">Product B</span>
        <span className="product-price">£ 10</span>
        <button className="remove-btn">Remove</button>
      </li>
    </ul>
  );
}

export default BasketList;
