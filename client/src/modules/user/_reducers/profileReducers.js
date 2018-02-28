const initialState = {
  shippingList: [], // Shipping list into profile
};

const shipping = (state = initialState, action) => {
  switch (action.type) {
    case 'SHIPPING_LIST_LOAD':
      return {
        ...state,
        shippingList: action.payload,
      };

    case 'SHIPPING_LIST_ITEM_ADD':
      return {
        ...state,
        shippingList: action.payload,
      };

    case 'SHIPPING_LIST_ITEM_REMOVE':
      return {
        ...state,
        shippingList: action.payload,
      };

    case 'SHIPPING_LIST_CLEAR':
      return {
        ...initialState,
      };

    default:
      return state;
  }
};

export default shipping;
