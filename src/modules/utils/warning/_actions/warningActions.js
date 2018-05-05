export function warningAdd(warning) {
  return (dispatch) => {
    dispatch({
      type: 'WARNING_ADD',
      payload: warning,
    });
  };
}

export function warningRemove(warning) {
  return (dispatch) => {
    dispatch({
      type: 'WARNING_REMOVE',
      payload: warning,
    });
  };
}

export function warningClear() {
  return dispatch =>
    dispatch({
      type: 'WARNING_CLEAR',
    });
}
