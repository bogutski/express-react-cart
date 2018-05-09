const initialState = {
  offerList: [], // Offer list
  offerInfo: {}, // Current offer info
  currentCategory: [], // offer list of current category
};

const offer = (state = initialState, action) => {
  switch (action.type) {
    case 'OFFERS_FILL':
      return {
        ...state,
        offerList: action.payload,
      };

    case 'OFFER_LIST_FILL':
      return {
        ...state,
        offerList: action.payload,
      };

    case 'OFFER_FILTER_BY_CATEGORY_ID':
      return {
        ...state,
        currentCategory: state.offerList.filter(el => el.catalog === action.payload),
      };

    case 'OFFER_INFO':
      return {
        ...state,
        offerInfo: action.payload,
      };

    default:
      return state;
  }
};

export default offer;
