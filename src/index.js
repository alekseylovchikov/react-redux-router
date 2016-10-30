import 'babel-polyfill';
import { Router, browserHistory } from 'react-router';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import routes from './routes';
import './styles/styles.css';

import configureStore from './store/configureStore';

const store = configureStore();

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
