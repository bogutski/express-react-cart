const initialState = {
  searchInputValue: '',
  searchProductList: [],
};

const search = (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH_INPUT_VALUE': {
      console.log(action.payload.searchProductList);
      const re = new RegExp(action.payload.searchInputValue, 'ig');
      const searchProductList = [] // action.payload.searchProductList.filter(el => el.name.match(re));

      return {
        ...state,
        searchProductList,
      };
    }

    default:
      return state;
  }
};

export default search;
