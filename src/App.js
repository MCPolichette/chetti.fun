import Home from './components/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import DiceGame from './components/DiceGame';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar!? */}
        <DiceGame />
        <Switch>
          <Route path="/">

            <Home />


          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
