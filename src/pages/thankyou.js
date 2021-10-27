import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BasketContext } from "../contexts/basket_context";

function ThankYou(props) {
  const { purchased } = useContext(BasketContext);
  let listPurchased = "";

  if (purchased) {
    listPurchased = purchased.map((item) => (
      <li key={item.id}>
        {item.qty} x {item.name}
      </li>
    ));
  }

  return (
    <div className="page thank-you">
      {listPurchased.length ? (
        <div className="thank-you-container">
          <span>Thanks for your order</span>
          <ul className="last-order-list">{listPurchased}</ul>
          <Link to="/products" className="button">
            Back to Shop
          </Link>
        </div>
      ) : (
        <Link to="/products" className="button">
          Back to Shop
        </Link>
      )}
    </div>
  );
}

export default ThankYou;
