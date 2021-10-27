import React, { useContext } from "react";
import { ProductsContext } from "../contexts/products_context";

function ProductsList() {
  const { allProducts } = useContext(ProductsContext);
  return (
    <ul className="products-list">
      {allProducts.map((product) => {
        return (
          <li key={product.id}>
            <span className="product-name">{product.name}</span>
            <span className="product-price">£ {product.price}</span>
            <button className="buy-btn">Buy</button>
          </li>
        );
      })}
    </ul>
  );
}

export default ProductsList;
