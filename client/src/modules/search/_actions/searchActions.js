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

export function sh(v) {
  return dispatch =>
    dispatch({
      type: '_',
      payload: v,
    });
}
