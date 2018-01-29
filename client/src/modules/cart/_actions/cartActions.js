export function cartProductAdd(product, qt = 1) {
  return dispatch =>
    dispatch({
      type: 'CART_PRODUCT_ADD',
      payload: { ...product, qt },
    });
}

export function cartProductRemove(productId) {
  return dispatch =>
    dispatch({
      type: 'CART_PRODUCT_REMOVE',
      payload: productId,
    });
}
