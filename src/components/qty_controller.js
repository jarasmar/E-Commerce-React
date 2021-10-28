import React, { useContext } from "react";
import { BasketContext } from "../contexts/basket_context";

function QtyController(props) {
  const { dispatch } = useContext(BasketContext);

  return (
    <div className="qty-container">
      <div className="qty-controller">
        <div
          className="qty-btn minus"
          onClick={() =>
            dispatch({ type: "decreaseQty", product: props.product })
          }
        >
          -
        </div>
        <div className="product-qty">{props.product.qty}</div>
        <div
          className="qty-btn plus"
          onClick={() =>
            dispatch({ type: "increaseQty", product: props.product })
          }
        >
          +
        </div>
      </div>
      <button
        className="remove-btn"
        onClick={() => dispatch({ type: "remove", product: props.product })}
      >
        Remove
      </button>
    </div>
  );
}

export default QtyController;
