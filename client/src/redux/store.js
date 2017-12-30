import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers';

const logger = createLogger({
  collapsed: true,
});

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk),
    applyMiddleware(logger),
  ),
);

export default store;
