import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from '../components/Home';

var routes = (
<Router>
  <div id="container" >
    <div id="navbar" style={{padding: '0.5em', background: '#ccc', width: '100%'}}>
      Hello from navbar
    </div>

    <Route path="/" component={Home} />
  </div>
</Router>
);

module.exports = routes;
