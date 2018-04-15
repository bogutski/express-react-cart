const initialState = {
  productList: [], // Product list
  productInfo: {}, // Current product info
  currentCategory: [], // product list of current category
};

const product = (state = initialState, action) => {
  switch (action.type) {
    case 'PRODUCTS_FILL':
      return {
        ...state,
        productList: action.payload,
      };

    case 'PRODUCT_LIST_FILL':
      return {
        ...state,
        productList: action.payload,
      };

    case 'PRODUCT_FILTER_BY_CATEGORY_ID':
      return {
        ...state,
        currentCategory: state.productList.filter(el => el.catalog === action.payload),
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
