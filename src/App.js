import React, {useState} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import Home from "./Components/Home/Home";
import Navigation from "./Components/Navigation/Navigation";
import ThreeColumns from "./Components/ThreeColumns/ThreeColumns";

function App() {
    return (
        <Router>
            <div className="App">
                <Navigation/>
                <Switch>
                    <Route exact path="/"><Home/></Route>

                </Switch>
                <ThreeColumns/>
            </div>
        </Router>
    )

}

export default App;