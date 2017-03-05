import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./components/Layout";
import Movies from "./components/movies/Movies";
import Characters from "./components/characters/Characters";

const app = document.getElementById('app');
    
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <Route path="movies-list" component={Movies}></Route>
      <Route path="characters-list" component={Characters}></Route>
    </Route>
  </Router>
, app);
