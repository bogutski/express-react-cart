import { reset } from 'redux-form';
import { get, post } from '../../httpRequest/httpMethods';

export function vocabularCreate(vocabular) {
  return () =>
    post(
      '/vocabular',
      vocabular,
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

export function getVocabularById(vocabularId) {
  return dispatch =>
    get(`/vocabular/${vocabularId}`)
      .then((res) => {
        dispatch({
          type: 'VOCABULAR_INFO',
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

export function vocabularAddTermToChild(path, term) {

}

export function vocabularAddTermToRoot(term) {
  return (dispatch) => {
    dispatch({
      type: 'VOCABULAR_TERM_ADD_TO_ROOT',
      payload: term,
    });

    dispatch(reset('term')); // Clear form
  };
}

export function vocabularDeleteTerm(path) {
  console.log(path);

  return dispatch =>
    dispatch({
      type: 'VOCABULAR_TERM_DELETE',
      payload: path,
    });
}
