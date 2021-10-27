import React, { createContext, useState } from "react";

export const BasketContext = createContext();

const BasketContextProvider = (props) => {
  const [basket, setBasket] = useState([]);
  return (
    <BasketContext.Provider value={{ basket }}>
      {props.children}
    </BasketContext.Provider>
  );
};

export default BasketContextProvider;
