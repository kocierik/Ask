import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import MatchDay from "./Matchday/index"
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';

ReactDOM.render(
  <Router>
     <Switch>
        <Route path="/" component={App}>
          <App />
         </Route>
         <Route path="/MatchDay" component={MatchDay}>
           <MatchDay />
         </Route>
    </Switch>
  </Router>,
  document.getElementById('root')
);

