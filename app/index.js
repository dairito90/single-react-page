import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Home from './components/Home';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';


var ReactRouter = {
      Router,
      Route,
      IndexRoute,
      IndexLink,
      hashHistory,
      Link };
    var destination = document.querySelector("#app");

    ReactDOM.render(
<Router history={hashHistory}>
<Route path="/" component={App}>
  <IndexRoute component={Home}/>
  <Route path="about" component={About} />
  <Route path="contact" component={Contact} />
</Route>
</Router>,
destination
);
