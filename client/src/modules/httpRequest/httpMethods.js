import axios from 'axios';
import Notifications from 'react-notification-system-redux';
import store from '../../redux/store';

export function post(url, data) {
  return axios({
    method: 'post',
    url,
    data: { data },
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  })
    .then((res) => {
      store.dispatch(Notifications.removeAll()); // Removes all notifications
      store.dispatch(Notifications.success({
        title: res.data.message.text,
        autoDismiss: 0,
      }));
      return res;
    })
    .catch((error) => {
      if (error.response) {
        store.dispatch(Notifications.error({
          title: error.response.data.message.text,
          autoDismiss: 0,
        }));
      }
      return error;
    });
}

export function get(url) {
  return axios({
    method: 'get',
    url,
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  })
    .then(res => res)
    .catch((error) => {
      if (error.response) {
        store.dispatch(Notifications.error({
          title: error.response.data.message.text,
          autoDismiss: 0,
        }));
      }
      return error;
    });
}