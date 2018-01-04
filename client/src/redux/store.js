import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers';

const logger = createLogger({
  collapsed: true,
});

// Build the middleware for intercepting and dispatching navigation actions
const history = createHistory();
const reactRouterRedux = routerMiddleware(history);

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk),
    applyMiddleware(logger),
    applyMiddleware(reactRouterRedux),
  ),
);

export default store;
