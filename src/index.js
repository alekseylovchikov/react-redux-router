import 'babel-polyfill';
import { Router, browserHistory } from 'react-router';
import React from 'react';
import { render } from 'react-dom';
import routes from './routes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';

render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('app')
);
