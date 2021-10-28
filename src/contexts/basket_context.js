import React, { createContext, useReducer, useEffect } from "react";
import { BasketReducer } from "../reducers/basket_reducer";

export const BasketContext = createContext();

const BasketContextProvider = (props) => {
  const [state, dispatch] = useReducer(BasketReducer, [], () => {
    const localDataBasket = localStorage.getItem("basket");
    const localDataItems = localStorage.getItem("items");
    return {
      basket: localDataBasket ? JSON.parse(localDataBasket) : [],
      items: localDataItems ? JSON.parse(localDataItems) : 0,
      purchased: [],
    };
  });

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(state.basket));
    localStorage.setItem("items", JSON.stringify(state.items));
  }, [state]);

  return (
    <BasketContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {props.children}
    </BasketContext.Provider>
  );
};

export default BasketContextProvider;
