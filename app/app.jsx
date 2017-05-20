import React from 'react';
var ReactDOM = require("react-dom");
var Main = require('Main');
var {HashRouter, Switch, Route, hashHistory, Link} = require('react-router-dom');

ReactDOM.render(
  <HashRouter>
    <Main/>
  </HashRouter>,
  document.getElementById('app')
);
