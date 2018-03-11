export function searchInputValue(value) {
  return (dispatch, getState) =>
    dispatch({
      type: 'SEARCH_INPUT_VALUE',
      payload: {
        searchInputValue: value,
        productList: getState().product.productList,
      },
    });
}

export function searchProductListClear(v) {
  return dispatch =>
    dispatch({
      type: 'SEARCH_PRODUCT_LIST_CLEAR',
    });
}
