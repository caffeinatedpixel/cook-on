import React from 'react';
import './App.scss';
import Recipes from "./components/Recipes/Recipes"
import { BrowserRouter, Route, Link, Switch} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <nav>
            <Link to="/recipes">RECIPES</Link>
            <Link to="/plan">MEAL PLAN</Link>
          </nav>
        </header>
        <Switch>
          <Route path="/recipes">
            <Recipes/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
