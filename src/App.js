import React from "react";
import Home from "./components/HomeAndNavigation/Home.js";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import DiceGame from "./components//Dice_Game/DiceGame";
import Memory from "./components/Memory/Memory.js";
import NavBar from "./components/HomeAndNavigation/NavBar.js";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/dice">
            <DiceGame />
          </Route>
          <Route path="/memory">
            <Memory />
          </Route>
          <Redirect to="/" />
        </Switch>
      </div>
      <NavBar />
    </HashRouter>
  );
}

export default App;
