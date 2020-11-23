import React, {useState} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import * as ROUTES from './routes';
import Home from "./Components/Home/Home";
import Navigation from "./Components/Navigation/Navigation";

function App() {
  return (
      <Router>
          <div className="App">
              <Navigation/>
              <Switch>
                  <Route exact path="/"><Home/></Route>
              </Switch>

          </div>
      </Router>
  )

}

export default App;