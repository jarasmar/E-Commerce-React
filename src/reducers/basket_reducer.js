export const BasketReducer = (state, action) => {
  switch (action.type) {
    case "add": {
      const alreadyInBasket =
        state.filter((x) => x.id === action.product.id).length > 0;

      if (alreadyInBasket) {
        return state.map((x) =>
          x.id === action.product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        return [...state, { ...action.product, qty: action.product.qty + 1 }];
      }
    }
    case "remove": {
      return state.filter((x) => {
        return x !== action.product;
      });
    }
    case "checkout": {
      return (state = []);
    }
    default: {
      return state;
    }
  }
};

//   const addProduct = (product) => {
//     if (basket.indexOf(product) >= 0) {
//       basket[basket.indexOf(product)].qty += 1;
//       setItems((items += 1));
//     } else {
//       product.qty += 1;
//       setBasket([...basket, product]);
//       setItems((items += 1));
//     }
//     console.log(basket);
//   };

//   const removeProduct = (product) => {
//     const updatedBasket = basket.filter((x) => {
//       return x !== product;
//     });
//     setBasket(updatedBasket);
//     setItems((items -= 1));
//   };

//   const checkout = () => {
//     setPurchased(basket);
//     setBasket([]);
//     setItems(0);
//   };
