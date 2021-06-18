import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import LupaKataSandi1 from './pages/lupa_kata_sandi/LupaKataSandi1';
import LupaKataSandi2 from './pages/lupa_kata_sandi/lupaKataSandi2';

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
          <Route path="/lupakatasandi/2">
            <LupaKataSandi2 />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
