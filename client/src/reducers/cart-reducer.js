const initialState = {};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      //if the item is already in cart, add to the existing quantity
      if (state[action.item.name]) {
        return {
          ...state,
          [action.item.name]: {
            ...action.item,
            quantity: state[action.item.name]["quantity"] + action.quantity,
          },
        };
      }
      //if the item is a new addition to cart
      else {
        return {
          ...state,
          [action.item.name]: {
            ...action.item,
            quantity: action.quantity,
          },
        };
      }
    }

    case "UPDATE_QTY_IN_CART": {
      return {
        ...state,
        [action.item.name]: {
          ...action.item,
          quantity: action.quantity,
        },
      };
    }

    case "REMOVE_ITEM": {
      const newState = { ...state };
      delete newState[action.item.name];
      return newState;
    }

    case "CLEAR_CART": {
      return {};
    }

    default: {
      return state;
    }
  }
}

export const getCartTotal = (state) => {
  //returns total number of items in cart

  let cartTotal = 0;
  Object.values(state.cart).forEach((item) => (cartTotal += item.quantity));
  return cartTotal;
};
