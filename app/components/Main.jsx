import React from 'react';
var {HashRouter, Switch, Route, hashHistory, Link} = require('react-router-dom');
var Nav = require('Nav');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

var Main = (props) => {
  return (
    <div>
      <Nav/>
      <div className="row">
        <div className="columns medium-6 large-4 small-centered">
          <Switch>
            {/* <Route path='/' component={Main}/> */}
            <Route exact path='/' component={Weather}/>
            <Route path='/about' component={About}/>
            <Route path='/examples' component={Examples}/>
          </Switch>
        </div>
      </div>

    </div>
  );
};

module.exports = Main;
