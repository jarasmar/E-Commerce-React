import React, { createContext, useState, useEffect } from "react";

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
    const updatedBasket = basket.filter((x) => {
      return x !== product;
    });
    setBasket(updatedBasket);
  };

  const increaseQty = (product) => {
    basket[basket.indexOf(product)].qty += 1;
  };

  const decreaseQty = (product) => {
    if (basket[basket.indexOf(product)].qty === 1) {
      return removeProduct(product);
    } else {
      basket[basket.indexOf(product)].qty -= 1;
    }
  };

  useEffect(() => {
    return basket;
  }, [basket]);

  return (
    <BasketContext.Provider
      value={{ basket, addProduct, removeProduct, increaseQty, decreaseQty }}
    >
      {props.children}
    </BasketContext.Provider>
  );
};

export default BasketContextProvider;
