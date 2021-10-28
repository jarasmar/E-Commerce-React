import React, { createContext, useReducer } from "react";
import { BasketReducer } from "../reducers/basket_reducer";

export const BasketContext = createContext();

const BasketContextProvider = (props) => {
  //   const [basket, setBasket] = useState([]);
  const [state, dispatch] = useReducer(BasketReducer, {
    basket: [],
    items: 0,
    purchased: [],
  });

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
