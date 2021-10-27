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
    setBasket((basket) =>
      basket.map((item) =>
        item.id === product.id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (product) => {
    if (basket[basket.indexOf(product)].qty === 1) {
      return removeProduct(product);
    } else {
      setBasket((basket) =>
        basket.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty - 1 } : item
        )
      );
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
