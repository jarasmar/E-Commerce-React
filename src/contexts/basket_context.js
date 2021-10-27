import React, { createContext, useState } from "react";

export const BasketContext = createContext();

const BasketContextProvider = (props) => {
  const [basket, setBasket] = useState([]);
  let [items, setItems] = useState(0);
  const [purchased, setPurchased] = useState([]);

  const addProduct = (product) => {
    if (basket.indexOf(product) >= 0) {
      basket[basket.indexOf(product)].qty += 1;
      setItems((items += 1));
    } else {
      product.qty += 1;
      setBasket([...basket, product]);
      setItems((items += 1));
    }
    console.log(basket);
  };

  const removeProduct = (product) => {
    const updatedBasket = basket.filter((x) => {
      return x !== product;
    });
    setBasket(updatedBasket);
    setItems((items -= 1));
  };

  const increaseQty = (product) => {
    setBasket((basket) =>
      basket.map((item) =>
        item.id === product.id ? { ...item, qty: item.qty + 1 } : item
      )
    );
    setItems((items += 1));
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
    setItems((items -= 1));
  };

  const checkout = () => {
    setPurchased(basket);
    setBasket([]);
    setItems(0);
  };

  return (
    <BasketContext.Provider
      value={{
        basket,
        items,
        purchased,
        addProduct,
        removeProduct,
        increaseQty,
        decreaseQty,
        checkout,
      }}
    >
      {props.children}
    </BasketContext.Provider>
  );
};

export default BasketContextProvider;
