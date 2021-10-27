import React, { createContext, useState } from "react";

export const BasketContext = createContext();

const BasketContextProvider = (props) => {
  const [basket, setBasket] = useState([]);

  const addProduct = (product) => {
    setBasket([...basket, product]);
  };

  return (
    <BasketContext.Provider value={{ basket, addProduct }}>
      {props.children}
    </BasketContext.Provider>
  );
};

export default BasketContextProvider;
