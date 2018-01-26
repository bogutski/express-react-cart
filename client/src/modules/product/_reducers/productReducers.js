const initialState = {
  productList: [], // Product list
  productInfo: {}, // Current product info
};

const product = (state = initialState, action) => {
  switch (action.type) {
    case 'PRODUCT_LOAD_ALL':
      return {
        ...state,
        productList: action.payload,
      };

    case 'PRODUCT_INFO':
      return {
        ...state,
        productInfo: action.payload,
      };

    default:
      return state;
  }
};

export default product;
