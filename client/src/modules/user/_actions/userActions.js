import axios from 'axios';
import Notifications from 'react-notification-system-redux';

export function getAllUsers() {
  return dispatch =>
    axios.get('user')
      .then((res) => {
        console.log(res);
        dispatch({
          type: 'USER_LIST',
          payload: res.data,
        });
      })
      .then(() => {
        dispatch(Notifications.success({ title: 'OK', message: 'ok' }));
      })
      .catch((error) => {
        if (error.response) {
          dispatch(Notifications.error({ title: 'Erorr', message: error.response.data.message.text }));
        }
      });
}

export function registerUser(email, password) {
  return dispatch =>
    axios.post(
      '/user',
      { email, password },
    )
      .then((res) => {
        console.log(res);
        dispatch({
          type: 'USER_REGISTER',
          payload: res.data,
        });
      })
      .then((res) => {
        console.log(res);
        dispatch(Notifications.success({ title: 'OK', message: 'ok' }));
      })
      .catch((error) => {
        if (error.response) {
          dispatch(Notifications.error({ title: 'Erorr', message: error.response.data.message.text }));
        }
      });
}
