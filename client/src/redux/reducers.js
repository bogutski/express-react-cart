import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import user from './../modules/user/_reducers/userReducers';

// Combine Reducers
const reducers = combineReducers({
  user,
  form: formReducer,
});

export default reducers;
