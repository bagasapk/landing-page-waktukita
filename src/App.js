import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RegisterAsEducator1 from "./pages/register/registerAsEducator/RegisterAsEducator1";
import RegisterAsEducator2 from "./pages/register/registerAsEducator/RegisterAsEducator2";
import RegisterAsStudent from "./pages/register/registerAsStudent/RegisterAsStudent";
import RegisterAsEducator3 from "./pages/register/registerAsEducator/RegisterAsEducator3";
import RegisterAsEducator4 from "./pages/register/registerAsEducator/RegisterAsEducator4";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/"></Route>
        <Switch>
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
