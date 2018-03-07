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

    dispatch(shippingListUpdated(true));
  };
}

export function shippingListUpdated(bool) {
  return (dispatch) => {
    dispatch({
      type: 'SHIPPING_LIST_UPDATED',
      payload: bool,
    });
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
  return () => patch(
    `/user/shipping/${userId}`,
    data,
  );
}

export function updateBilling(userId, data) {
  return () =>
    patch(
      `/user/billing/${userId}`,
      data,
    );
}
