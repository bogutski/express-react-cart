import { initialize } from 'redux-form';
import { patch } from '../../utils/httpRequest/httpMethods';

export function shippingListLoad() {
  return (dispatch, getState) =>
    dispatch({
      type: 'SHIPPING_LIST_LOAD',
      payload: getState().user.userInfo.shipping,
    });
}

export function shippingListItemAdd(userId, form) {
  return (dispatch) => {
    dispatch({
      type: 'SHIPPING_LIST_ITEM_ADD',
      payload: form,
    });

    dispatch(initialize('shipping', {})); // Clear form;
    dispatch(updateShipping(userId));
  };
}

export function shippingListItemToEditForm(data) {
  return (dispatch) => {
    dispatch(initialize('shipping', data.data)); // Fill form
    dispatch({
      type: 'SHIPPING_LIST_ITEM_TO_EDIT_FORM',
      payload: data,
    });
  };
}

export function updateShipping(userId, data) {
  return (dispatch, getState) => {
    console.log(getState().user.userInfo.shipping);
    return patch(
      `/user/shipping/${userId}`,
      getState().user.userInfo.shipping,
    );
  };
}

export function updateBilling(userId, data) {
  return () =>
    patch(
      `/user/billing/${userId}`,
      data,
    );
}
