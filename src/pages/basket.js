import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BasketContext } from "../contexts/basket_context";
import BasketList from "../components/basket_list";
import Checkout from "../components/checkout";

function Basket() {
  const { state } = useContext(BasketContext);
  return (
    <div className="page basket">
      <div className="header">Basket</div>
      {state.basket.length ? (
        <div className="full-basket">
          <BasketList />
          <Checkout />
        </div>
      ) : (
        <div className="empty-basket-container">
          <span>Your basket is empty</span>
          <Link to="/products" className="button empty-basket">
            Shop Here
          </Link>
        </div>
      )}
    </div>
  );
}

export default Basket;
