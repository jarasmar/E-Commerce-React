import React, { useContext } from "react";
import { BasketContext } from "../contexts/basket_context";

function QtyController(props) {
  const { increaseQty, decreaseQty, removeProduct } = useContext(BasketContext);

  return (
    <div className="qty-container">
      <div className="qty-controller">
        <div
          className="qty-btn minus"
          onClick={() => decreaseQty(props.product)}
        >
          -
        </div>
        <div className="product-qty">{props.product.qty}</div>
        <div
          className="qty-btn plus"
          onClick={() => increaseQty(props.product)}
        >
          +
        </div>
      </div>
      <button
        className="remove-btn"
        onClick={() => removeProduct(props.product)}
      >
        Remove
      </button>
    </div>
  );
}

export default QtyController;
