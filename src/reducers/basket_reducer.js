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
    case "increaseQty": {
      return state.map((x) =>
        x.id === action.product.id ? { ...x, qty: x.qty + 1 } : x
      );
    }
    case "decreaseQty": {
      if (action.product.qty === 1) {
        return state.filter((x) => {
          return x !== action.product;
        });
      } else {
        return state.map((x) =>
          x.id === action.product.id ? { ...x, qty: x.qty - 1 } : x
        );
      }
    }
    case "checkout": {
      return (state = []);
    }
    default: {
      return state;
    }
  }
};
