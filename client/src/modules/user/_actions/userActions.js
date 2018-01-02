import axios from 'axios';

export function getAllUsers() {
  return dispatch =>
    axios.get('/user')
      .then((res) => {
        dispatch({
          type: 'USER_LIST',
          payload: res.data,
        });
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
      });
}
