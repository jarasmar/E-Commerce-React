import React, { createContext, useState, useReducer } from "react";
import { BasketReducer } from "../reducers/basket_reducer";

export const BasketContext = createContext();

const BasketContextProvider = (props) => {
  //   const [basket, setBasket] = useState([]);
  const [basket, dispatch] = useReducer(BasketReducer, []);
  let [items, setItems] = useState(0);
  const [purchased, setPurchased] = useState([]);

  //   const increaseQty = (product) => {
  //     setBasket((basket) =>
  //       basket.map((item) =>
  //         item.id === product.id ? { ...item, qty: item.qty + 1 } : item
  //       )
  //     );
  //     setItems((items += 1));
  //   };

  //   const decreaseQty = (product) => {
  //     if (basket[basket.indexOf(product)].qty === 1) {
  //       return removeProduct(product);
  //     } else {
  //       setBasket((basket) =>
  //         basket.map((item) =>
  //           item.id === product.id ? { ...item, qty: item.qty - 1 } : item
  //         )
  //       );
  //     }
  //     setItems((items -= 1));
  //   };

  return (
    <BasketContext.Provider
      value={{
        basket,
        items,
        purchased,
        dispatch,
        // addProduct,
        // removeProduct,
        // increaseQty,
        // decreaseQty,
        // checkout,
      }}
    >
      {props.children}
    </BasketContext.Provider>
  );
};

export default BasketContextProvider;
