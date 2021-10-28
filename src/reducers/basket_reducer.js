export const BasketReducer = (state, action) => {
  switch (action.type) {
    case "add": {
      console.log(state);

      const alreadyInBasket =
        state.basket.filter((x) => x.id === action.product.id).length > 0;

      if (alreadyInBasket) {
        return {
          basket: state.basket.map((x) =>
            x.id === action.product.id ? { ...x, qty: x.qty + 1 } : x
          ),
        };
      } else {
        return {
          basket: [
            ...state.basket,
            { ...action.product, qty: action.product.qty + 1 },
          ],
        };
      }
    }
    case "remove": {
      return {
        basket: state.basket.filter((x) => {
          return x !== action.product;
        }),
      };
    }
    case "increaseQty": {
      return {
        basket: state.basket.map((x) =>
          x.id === action.product.id ? { ...x, qty: x.qty + 1 } : x
        ),
      };
    }
    case "decreaseQty": {
      if (action.product.qty === 1) {
        return {
          basket: state.basket.filter((x) => {
            return x !== action.product;
          }),
        };
      } else {
        return {
          basket: state.basket.map((x) =>
            x.id === action.product.id ? { ...x, qty: x.qty - 1 } : x
          ),
        };
      }
    }
    case "checkout": {
      return (state.basket = []);
    }
    default: {
      return state;
    }
  }
};
