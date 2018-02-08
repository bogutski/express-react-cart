import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import store from './redux/store';

import './styles/style.css';
import Index from './layout/Index';
import history from './history';

render(
  <Provider store={store}>
    <Router history={history}>
      <Index />
    </Router>
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
