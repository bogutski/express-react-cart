import { initialize } from 'redux-form';
import { del, get, patch, post } from '../../httpRequest/httpMethods';

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

export function productDeleteById(productId) {
  return dispatch =>
    del(`/product/${productId}`)
      .then(() => {
        dispatch(productGetAll()); // Reload list
      });
}

export function productGetAll() {
  return dispatch =>
    get('/product')
      .then((res) => {
        dispatch({
          type: 'PRODUCT_LOAD_ALL',
          payload: res.data,
        });
      });
}

export function productGetById(productId) {
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

// Strategy: load and accumulate products by category id in object - Unused
export function productGetByCategoryId(categoryId) {
  return dispatch =>
    get(`/product/category/id/${categoryId}`)
      .then((res) => {
        dispatch({
          type: 'PRODUCT_LOAD_BY_CATEGORY_ID',
          payload: {
            data: res.data,
            categoryId,
          },
        });
      });
}
