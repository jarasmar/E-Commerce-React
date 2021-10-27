import React, { createContext, useState } from "react";

export const BasketContext = createContext();

const BasketContextProvider = (props) => {
  const [basket, setBasket] = useState([]);

  const addProduct = (product) => {
    if (basket.indexOf(product) >= 0) {
      basket[basket.indexOf(product)].qty += 1;
    } else {
      product.qty += 1;
      setBasket([...basket, product]);
    }
    console.log(basket);
  };

  const removeProduct = (product) => {
    console.log("Removed " + product.name);
  };

  const increaseQty = (product) => {
    console.log("Plus 1 " + product.name);
  };
  const decreaseQty = (product) => {
    console.log("Minus 1 " + product.name);
  };

  return (
    <BasketContext.Provider
      value={{ basket, addProduct, removeProduct, increaseQty, decreaseQty }}
    >
      {props.children}
    </BasketContext.Provider>
  );
};

export default BasketContextProvider;
