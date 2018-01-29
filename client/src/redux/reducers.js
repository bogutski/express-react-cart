import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import { reducer as notifications } from 'react-notification-system-redux';
import user from './../modules/user/_reducers/userReducers';
import product from './../modules/product/_reducers/productReducers';
import vocabular from './../modules/vocabular/_reducers/vocabularReducers';
import cart from './../modules/cart/_reducers/cartReducers';

// Combine Reducers
const reducers = combineReducers({
  user,
  product,
  vocabular,
  cart,
  notifications,
  form: formReducer,
  router: routerReducer,
});

export default reducers;
