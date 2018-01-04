import axios from 'axios';
import { get, post } from '../../httpRequest/httpMethods';

export function userRegister(email, password) {
  return dispatch =>
    post(
      '/user',
      { email, password },
    )
      .then((res) => {
        dispatch({
          type: 'USER_REGISTER',
          payload: res.data,
        });
      });
}

export function getAllUsers() {
  return dispatch =>
    get('/user')
      .then((res) => {
        dispatch({
          type: 'USER_LIST',
          payload: res.data,
        });
      });
}

export function getUserById(userId) {
  return dispatch =>
    get(`/user/${userId}`)
      .then((res) => {
        dispatch({
          type: 'USER_INFO',
          payload: res.data,
        });
      });
}

export function userLogin(email, password) {
  return dispatch =>
    axios.post(
      '/user/login',
      { email, password },
    )
      .then((res) => {
        console.log(res.data);
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('userId', res.data.userId);
      });
}
