const initialState = {
  cart: [], // Product list in cart
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'CART_PRODUCT_ADD':
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    default:
      return state;
  }
};

export default cart;
