import React from 'react';
import Home from './components/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import DiceGame from './components//Dice_Game/DiceGame';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar!? */}
        <Home />

        <Switch>
          <Route path="/">
            <DiceGame />



          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
