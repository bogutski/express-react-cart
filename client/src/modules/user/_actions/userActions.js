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

export function userLogin(email, password) {
  return dispatch =>
    post(
      '/user/login',
      { email, password },
    );
}
