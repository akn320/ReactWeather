import React from 'react';
var ReactDOM = require("react-dom");
var Main = require('Main');
var {HashRouter, Switch, Route, hashHistory, Link} = require('react-router-dom');

//Load foundation
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
jQuery(document).ready(function($) {
  $(document).foundation();
});

ReactDOM.render(
  <HashRouter>
    <Main/>
  </HashRouter>,
  document.getElementById('app')
);
