import React, { createContext, useState, useReducer } from "react";
import { BasketReducer } from "../reducers/basket_reducer";

export const BasketContext = createContext();

const BasketContextProvider = (props) => {
  //   const [basket, setBasket] = useState([]);
  const [state, dispatch] = useReducer(BasketReducer, {
    basket: [],
    items: 0,
  });
  //   let [items, setItems] = useState(0);
  const [purchased, setPurchased] = useState([]);

  return (
    <BasketContext.Provider
      value={{
        state,
        purchased,
        dispatch,
      }}
    >
      {props.children}
    </BasketContext.Provider>
  );
};

export default BasketContextProvider;
