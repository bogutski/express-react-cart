import { initialize } from 'redux-form';
import { del, get, patch, post } from '../../httpRequest/httpMethods';

export function vocabularCreate(data) {
  return () =>
    post(
      '/vocabular',
      data,
    );
}

export function vocabularUpdate(vocabularId, data) {
  return () =>
    patch(
      `/vocabular/${vocabularId}`,
      data,
    );
}

export function vocabularGetAll() {
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
      type: 'VOCABULAR_TERM_TREE',
      payload: treeData,
    });
}

export function vocabularClearForm() {
  return dispatch => dispatch(vocabularSetTreeData([]));
}

export function vocabularGetById(vocabularId) {
  return dispatch =>
    get(`/vocabular/${vocabularId}`)
      .then((res) => {
        dispatch(initialize('vocabular', { ...res.data })); // Fill form
        dispatch(vocabularSetTreeData(res.data.terms || []));
      });
}

export function vocabularGetByParams(data) {
  return dispatch =>
    post(
      '/vocabular/params/',
      data,
    )
      .then(res => res.data);
}

export function vocabularFillCatalog() {
  const catalogSearchParam = { name: 'Catalog' };

  return (dispatch) => {
    dispatch(vocabularGetByParams(catalogSearchParam))
      .then((res) => {
        dispatch({
          type: 'VOCABULAR_CATALOG',
          payload: res[0].terms,
        });
        dispatch({
          type: 'VOCABULAR_CATALOG_FLAT',
          payload: res[0].terms,
        });
      });
  };
}

export function vocabularDeleteById(vocabularId) {
  return dispatch =>
    del(`/vocabular/${vocabularId}`)
      .then(() => {
        dispatch(vocabularGetAll()); // Reload list
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

export function vocabularTermUpdate(node, term, path) {
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

export function vocabularTermAddToRoot(term) {
  return (dispatch) => {
    dispatch({
      type: 'VOCABULAR_TERM_ADD_TO_ROOT',
      payload: term,
    });

    dispatch(initialize('term', {})); // Clear form
  };
}

export function vocabularTermCancelEdit() {
  return (dispatch) => {
    dispatch({
      type: 'VOCABULAR_TERM_CANCEL_EDIT',
    });

    dispatch(initialize('term', {})); // Clear form
  };
}

export function vocabularTermDelete(path) {
  return (dispatch) => {
    dispatch({
      type: 'VOCABULAR_TERM_DELETE',
      payload: path,
    });

    dispatch(initialize('term', {})); // Clear form
  };
}
