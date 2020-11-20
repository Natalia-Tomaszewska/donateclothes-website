import React, {useState} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import * as ROUTES from './routes';
import Home from "./Components/Home/Home";

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path={ROUTES.Home} component={Home}/>
        </Switch>
      </Router>
  );
}

export default App;