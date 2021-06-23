import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import LupaKataSandi1 from './pages/login/lupa_kata_sandi/LupaKataSandi1';
import LupaKataSandi2 from './pages/login/lupa_kata_sandi/lupaKataSandi2';
import RegisterAsEducator1 from "./pages/register/registerAsEducator/RegisterAsEducator1";
import RegisterAsEducator2 from "./pages/register/registerAsEducator/RegisterAsEducator2";
import RegisterAsStudent from "./pages/register/registerAsStudent/RegisterAsStudent";
import RegisterAsEducator3 from "./pages/register/registerAsEducator/RegisterAsEducator3";
import RegisterAsEducator4 from "./pages/register/registerAsEducator/RegisterAsEducator4";
import Tentang from './pages/tentang/Tentang';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/"><Tentang/></Route>
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
          <Route path="/register/student">
            <RegisterAsStudent />
          </Route>
          <Route path="/register/educator/1">
            <RegisterAsEducator1 />
          </Route>
          <Route path="/register/educator/2">
            <RegisterAsEducator2 />
          </Route>
          <Route path="/register/educator/3">
            <RegisterAsEducator3 />
          </Route>
          <Route path="/register/educator/4">
            <RegisterAsEducator4 />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
