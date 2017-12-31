import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
// Reducers

// Combine Reducers
const reducers = combineReducers({
  mainState: {},
  form: formReducer,
});

export default reducers;
