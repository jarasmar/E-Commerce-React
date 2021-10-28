import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BasketContext } from "../contexts/basket_context";

function Checkout() {
  const { basket, items, dispatch } = useContext(BasketContext);
  let total = 0;
  basket.forEach((item) => {
    total += item.price * item.qty;
  });
  return (
    <div className="checkout-container">
      <div className="checkout-items">{items} Item(s)</div>
      <div className="checkout-total">Total: £ {total}</div>
      <Link
        to="/thankyou"
        onClick={() => dispatch({ type: "checkout" })}
        className="button checkout"
      >
        Order Now
      </Link>
    </div>
  );
}

export default Checkout;
