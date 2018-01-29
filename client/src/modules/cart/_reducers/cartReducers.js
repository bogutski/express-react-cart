const initialState = {
  cart: [], // Product list in cart
  totalPrice: 0, // Total price in cart
  totalCount: 0,
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'CART_PRODUCT_ADD':
      return {
        ...state,
        cart: addProduct(state.cart, action.payload),
      };

    default:
      return state;
  }
};

export default cart;


function addProduct(currentCart, productAndQt) {
  const isNewProduct = currentCart.find(el => el._id === productAndQt._id) === undefined;

  if (isNewProduct) {
    return [...currentCart,
      {
        ...productAndQt,
        total: productAndQt.qt * productAndQt.price,
      },
    ];
  }

  // Modify count for existing in cart products
  return currentCart.map((el) => {
    if (el._id === productAndQt._id) {
      return ({
        ...el,
        qt: el.qt + productAndQt.qt,
        total: (el.qt + productAndQt.qt) * productAndQt.price,
      });
    } return el;
  });
}
