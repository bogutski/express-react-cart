import { get, post } from '../../httpRequest/httpMethods';

export function productCreate(product) {
  return () =>
    post(
      '/product',
      product,
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
        dispatch({
          type: 'PRODUCT_INFO',
          payload: res.data,
        });
      });
}
