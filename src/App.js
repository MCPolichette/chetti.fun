import React from 'react';
import Home from './components/HomeAndNavigation/Home.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import DiceGame from './components//Dice_Game/DiceGame';
import Memory from './components/Memory/Memory.js';
import NavBar from './components/HomeAndNavigation/NavBar.js';

function App() {
  return (

    <Router>
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
        </Switch>
      </div>
      <NavBar />
    </Router>

  );
}

export default App;
