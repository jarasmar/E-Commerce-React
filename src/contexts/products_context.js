import React, { createContext } from "react";
import { allProducts } from "../data";

export const ProductsContext = createContext();

const ProductsContextProvider = (props) => {
  return (
    <ProductsContext.Provider value={{ allProducts }}>
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
