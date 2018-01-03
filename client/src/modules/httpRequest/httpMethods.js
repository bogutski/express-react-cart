import axios from 'axios';
import Notifications from 'react-notification-system-redux';
import store from '../../redux/store';

export default function post(URL, data) {
  return axios.post(URL, data)
    .then((res) => {
      console.log(res);
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
