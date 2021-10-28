export const BasketReducer = (state, action) => {
  switch (action.type) {
    case "add": {
      const alreadyInBasket =
        state.basket.filter((x) => x.id === action.product.id).length > 0;

      if (alreadyInBasket) {
        return {
          basket: state.basket.map((x) =>
            x.id === action.product.id ? { ...x, qty: x.qty + 1 } : x
          ),
          items: state.items + 1,
        };
      } else {
        return {
          basket: [
            ...state.basket,
            { ...action.product, qty: action.product.qty + 1 },
          ],
          items: state.items + 1,
        };
      }
    }
    case "remove": {
      return {
        basket: state.basket.filter((x) => {
          return x !== action.product;
        }),
        items: state.items - action.product.qty,
      };
    }
    case "increaseQty": {
      return {
        basket: state.basket.map((x) =>
          x.id === action.product.id ? { ...x, qty: x.qty + 1 } : x
        ),
        items: state.items + 1,
      };
    }
    case "decreaseQty": {
      if (action.product.qty === 1) {
        return {
          basket: state.basket.filter((x) => {
            return x !== action.product;
          }),
          items: state.items - 1,
        };
      } else {
        return {
          basket: state.basket.map((x) =>
            x.id === action.product.id ? { ...x, qty: x.qty - 1 } : x
          ),
          items: state.items - 1,
        };
      }
    }
    case "checkout": {
      return { basket: [], items: 0, purchased: state.basket };
    }
    default: {
      return state;
    }
  }
};
