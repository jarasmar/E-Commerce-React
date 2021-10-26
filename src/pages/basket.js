import React from "react";
import BasketList from "../components/basket_list";
import Checkout from "../components/checkout";

function Basket() {
  return (
    <div className="page basket">
      <div className="header">Basket</div>
      <div className="content">
        <BasketList />
        <Checkout />
      </div>
    </div>
  );
}

export default Basket;
