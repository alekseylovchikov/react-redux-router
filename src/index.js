import 'babel-polyfill';
import { Router, browserHistory } from 'react-router';
import React from 'react';
import { render } from 'react-dom';
import routes from './routes';
import './styles/styles.css';

render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('app')
);
