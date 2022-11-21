import Home from './components/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar!? */}
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
