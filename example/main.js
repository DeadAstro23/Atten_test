import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './App.jsx';
import ButtonsDemo from './src/pages/ButtonsDemo.jsx';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="buttons" component={ButtonsDemo}/>
    </Route>
  </Router>
), document.getElementById('app'));
