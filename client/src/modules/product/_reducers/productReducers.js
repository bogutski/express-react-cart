const initialState = {
  productList: [], // Product list
  productInfo: {}, // Current product info

  // Strategy: load and accumulate products by category id in object - Unused
  categoryProductList: {}, // accumulate subcategories. Prevent repeating API calls

  currentCategory: [], // product list of current category
};

const product = (state = initialState, action) => {
  switch (action.type) {
    case 'PRODUCT_LOAD_ALL':
      return {
        ...state,
        productList: action.payload,
      };

    // Strategy: load and accumulate products by category id in object - Unused
    case 'PRODUCT_LOAD_BY_CATEGORY_ID':
      return {
        ...state,
        categoryProductList: {
          ...state.categoryProductList,
          [action.payload.categoryId]: action.payload.data,
        },
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
