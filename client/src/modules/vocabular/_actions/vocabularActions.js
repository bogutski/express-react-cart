import { initialize } from 'redux-form';
import { get, post, patch } from '../../httpRequest/httpMethods';

export function vocabularCreate(vocabular) {
  return () =>
    post(
      '/vocabular',
      vocabular,
    );
}

export function vocabularUpdate(vocabularId, data) {
  return () =>
    patch(
      `/vocabular/${vocabularId}`,
      data,
    );
}

export function getAllVocabulars() {
  return dispatch =>
    get('/vocabular')
      .then((res) => {
        dispatch({
          type: 'VOCABULAR_LIST',
          payload: res.data,
        });
      });
}

export function vocabularSetTreeData(treeData) {
  return dispatch =>
    dispatch({
      type: 'VOCABULAR_TREE',
      payload: treeData,
    });
}

export function getVocabularById(vocabularId) {
  return dispatch =>
    get(`/vocabular/${vocabularId}`)
      .then((res) => {
        dispatch(initialize('vocabular', { ...res.data })); // Fill form name
        dispatch(vocabularSetTreeData(res.data.terms || []));
      });
}

export function vocabularTermToEditForm(node, path) {
  return (dispatch) => {
    dispatch(initialize('term', { ...node })); // Fill form
    dispatch({
      type: 'VOCABULAR_TERM_TO_EDIT_FORM',
      payload: {
        node,
        path,
      },
    });
  };
}

export function vocabularUpdateTerm(node, term, path) {
  return (dispatch) => {
    dispatch({
      type: 'VOCABULAR_TERM_UPDATE',
      payload: {
        node,
        term,
        path,
      },
    });

    dispatch(initialize('term', {})); // Clear form
  };
}

export function vocabularAddTermToRoot(term) {
  return (dispatch) => {
    dispatch({
      type: 'VOCABULAR_TERM_ADD_TO_ROOT',
      payload: term,
    });

    dispatch(initialize('term', {})); // Clear form
  };
}

export function cancelEditTerm() {
  return (dispatch) => {
    dispatch({
      type: 'VOCABULAR_TERM_CANCEL_EDIT',
    });

    dispatch(initialize('term', {})); // Clear form
  };
}

export function vocabularDeleteTerm(path) {
  return (dispatch) => {
    dispatch({
      type: 'VOCABULAR_TERM_DELETE',
      payload: path,
    });

    dispatch(initialize('term', {})); // Clear form
  };
}
