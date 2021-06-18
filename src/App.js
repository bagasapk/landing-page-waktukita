import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import LupaKataSandi1 from './pages/lupa_kata_sandi/LupaKataSandi1';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/"></Route>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/lupakatasandi/1">
            <LupaKataSandi1 />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
