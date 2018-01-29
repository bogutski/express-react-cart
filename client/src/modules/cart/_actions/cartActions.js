export function cartProductAdd(productId) {
  return dispatch =>
    dispatch({
      type: 'CART_PRODUCT_ADD',
      payload: productId,
    });
}

export function cartProductRemove(productId) {
  return dispatch =>
    dispatch({
      type: 'CART_PRODUCT_REMOVE',
      payload: productId,
    });
}
