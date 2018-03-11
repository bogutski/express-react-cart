const initialState = {
  searchInputValue: '',
  searchProductList: [],
};

const search = (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH_INPUT_VALUE': {
      const re = new RegExp(action.payload.searchInputValue, 'ig'); // TODO prevent /\/\
      const searchProductList = action.payload.productList.filter(el => el.name.match(re));

      return {
        ...state,
        searchProductList,
      };
    }

    case 'SEARCH_PRODUCT_LIST_CLEAR':
      return {
        ...state,
        searchProductList: initialState.searchProductList,
      };

    default:
      return state;
  }
};

export default search;
