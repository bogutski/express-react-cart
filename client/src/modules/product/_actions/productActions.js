import { initialize } from 'redux-form';
import { get, patch, post } from '../../httpRequest/httpMethods';

export function productCreate(product) {
  return () =>
    post(
      '/product',
      product,
    );
}

export function productUpdate(productId, data) {
  return () =>
    patch(
      `/product/${productId}`,
      data,
    );
}

export function getAllProducts() {
  return dispatch =>
    get('/product')
      .then((res) => {
        dispatch({
          type: 'PRODUCT_LIST',
          payload: res.data,
        });
      });
}

export function getProductById(productId) {
  return dispatch =>
    get(`/product/${productId}`)
      .then((res) => {
        dispatch(initialize('product', { ...res.data })); // Fill form
        dispatch({
          type: 'PRODUCT_INFO',
          payload: res.data,
        });
      });
}
