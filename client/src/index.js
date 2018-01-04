import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import createHistory from 'history/createBrowserHistory';
import store from './redux/store';

import './styles/style.css';
import Index from './layout/Index';

import registerServiceWorker from './registerServiceWorker';

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Index />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
