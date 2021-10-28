import React, { useContext } from "react";
import { BasketContext } from "../contexts/basket_context";
import QtyController from "./qty_controller";

function BasketList() {
  const { state } = useContext(BasketContext);
  return (
    <ul className="basket-list">
      {state.basket.map((product) => {
        return (
          <li key={product.id}>
            <span className="product-name">{product.name}</span>
            <span className="product-price">£ {product.price}</span>
            <QtyController product={product} />
          </li>
        );
      })}
    </ul>
  );
}

export default BasketList;
