import React, { useContext } from "react";
import { BasketContext } from "../contexts/basket_context";

function BasketList() {
  const { basket } = useContext(BasketContext);
  return (
    <ul className="basket-list">
      {basket.map((product) => {
        return (
          <li key={product.id}>
            <span className="product-name">{product.name}</span>
            <span className="product-price">£ {product.price}</span>
            <button className="buy-btn">Remove</button>
          </li>
        );
      })}
    </ul>
  );
}

export default BasketList;
