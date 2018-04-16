import axios from 'axios';
import _ from 'lodash';
import Notifications from 'react-notification-system-redux';
import store from '../../../redux/store';

function getHeaders(type) {
  return {
    Authorization: _.isEmpty(localStorage.getItem('token'))
      ? ''
      : `Bearer ${localStorage.getItem('token')}`,
    'Content-Type': type,
  };
}

function httpMethod(method, url, data, type = 'application/json') {
  console.log(process.env.REACT_APP_API_SERVER);
  return axios({
    method,
    url: process.env.NODE_ENV === 'production' ? process.env.REACT_APP_API_SERVER : url,
    data,
    headers: getHeaders(type),
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
        if (_.has(error.response, 'data.message.text')) {
          store.dispatch(Notifications.error({
            title: error.response.data.message.text,
            autoDismiss: 0,
          }));

          // Fix failed autologin
          if (error.response.data.message.text === 'Auth failed') localStorage.clear();
        } else if (_.has(error.response, 'data.error.message')) {
          store.dispatch(Notifications.error({
            title: error.response.data.error.message,
            autoDismiss: 0,
          }));
        } else {
          console.log('ERROR RESPONSE', error.response);
        }
      }

      return error;
    });
}

export function get(url, data) {
  return httpMethod('get', url, data);
}

export function post(url, data, type) {
  return httpMethod('post', url, data, type);
}

export function patch(url, data, type) {
  return httpMethod('patch', url, data, type);
}

export function del(url, data) {
  return httpMethod('delete', url, data);
}
