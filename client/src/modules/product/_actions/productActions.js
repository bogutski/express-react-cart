import { change, initialize } from 'redux-form';
import _ from 'lodash';
import { del, get, patch, post } from '../../utils/httpRequest/httpMethods';
import history from './../../../history';

export function productCreate(formData) {
  return () =>
    post(
      '/product',
      formData,
      'multipart/form-data',
    )
      .then((res) => {
        history.push(`/product/${res.data.payload.productId}`);
      });
}

export function productUpdate(productId, data) {
  return () =>
    patch(
      `/product/${productId}`,
      data,
      'multipart/form-data',
    );
}

export function productDeleteById(productId) {
  return dispatch =>
    del(`/product/${productId}`)
      .then(() => {
        dispatch(productLoadAll()); // Reload list
      });
}

export function productLoadAll() {
  return dispatch =>
    get('/product')
      .then((res) => {
        dispatch(productListFill(res.data));
        return res.data;
      })
      .then(products => dispatch(productFillLocalStorage(products)));
}

export function productListFill(products) {
  return dispatch =>
    dispatch({
      type: 'PRODUCT_LIST_FILL',
      payload: products,
    });
}

export function productFillLocalStorage(products) {
  return () =>
    localStorage.setItem('products', JSON.stringify({
      date: Date.now(),
      data: products,
    }));
}

// Decide here: load from server or from localStorage
export function productsGet() {
  // If localStorage is empty load from server
  if (_.isEmpty(localStorage.getItem('products'))) {
    return dispatch => dispatch(productLoadAll());
  }
  // Fill redux from localStorage
  const localProducts = JSON.parse(localStorage.getItem('products')).data;
  return dispatch => dispatch(productListFill(localProducts));
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

// Filter from redux store
export function productFilterByCategoryId(categoryId) {
  return dispatch =>
    dispatch({
      type: 'PRODUCT_FILTER_BY_CATEGORY_ID',
      payload: categoryId,
    });
}

export function rerangeImages(images) {
  return dispatch => dispatch(change('product', 'image', images));
}
