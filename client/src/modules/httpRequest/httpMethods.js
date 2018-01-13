import axios from 'axios';
import Notifications from 'react-notification-system-redux';
import store from '../../redux/store';

const headers = {
  Authorization: `Bearer ${localStorage.getItem('token')}`,
  // 'Content-Type': 'multipart/form-data',
};

function httpMethod(method, url, data) {
  return axios({
    method,
    url,
    data,
    headers,
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

export function post(url, data) {
  return httpMethod('post', url, data);
}

export function patch(url, data) {
  return httpMethod('patch', url, data);
}

export function del(url, data) {
  return httpMethod('delete', url, data);
}

export function get(url) {
  return axios({
    method: 'get',
    url,
    headers,
  })
    .then(res => res)
    .catch((error) => {
      if (error.response) {
        store.dispatch(Notifications.error({
          title: error.response.data.message.text,
          autoDismiss: 0,
        }));
      }

      // Fix failed autologin
      if (error.response.data.message.text === 'Auth failed') localStorage.clear();
      return error;
    });
}
