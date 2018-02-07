import axios from 'axios';
import _ from 'lodash';
import Notifications from 'react-notification-system-redux';
import store from '../../redux/store';

function getHeaders() {
  return {
    Authorization: _.isEmpty(localStorage.getItem('token'))
      ? ''
      : `Bearer ${localStorage.getItem('token')}`,
    // 'Content-Type': 'multipart/form-data',
  };
}

function httpMethod(method, url, data) {
  return axios({
    method,
    url,
    data,
    headers: getHeaders(),
  })
    .then((res) => {
      // If response has message
      if (_.has(res.data, 'message.text')) {
        store.dispatch(Notifications.removeAll()); // Removes all notifications
        store.dispatch(Notifications.success({
          title: res.data.message.text,
          autoDismiss: 0,
        }));
      }

      return res;
    })
    .catch((error) => {
      if (error.response) {
        if (!_.isEmpty(error.response.data.message.text)) {
          store.dispatch(Notifications.error({
            title: error.response.data.message.text,
            autoDismiss: 0,
          }));

          // Fix failed autologin
          if (error.response.data.message.text === 'Auth failed') localStorage.clear();
        } else {
          console.log('ERROR RESPONSE', error.response);
        }
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

export function get(url, data) {
  return httpMethod('get', url, data);
}
