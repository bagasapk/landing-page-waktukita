import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import LupaKataSandi1 from "./pages/login/lupa_kata_sandi/LupaKataSandi1";
import LupaKataSandi2 from "./pages/login/lupa_kata_sandi/lupaKataSandi2";
import RegisterAsEducator1 from "./pages/register/registerAsEducator/RegisterAsEducator1";
import RegisterAsStudent from "./pages/register/registerAsStudent/RegisterAsStudent";
import Tentang from "./pages/tentang/Tentang";
import Kontak from "./pages/kontak/Kontak";
import Beranda from "./pages/beranda/Beranda";
import SemuaKelas from "./pages/semuaKelas/SemuaKelas";
import Educator from "./pages/educator/Educator";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Beranda />
          </Route>
          <Route path="/about">
            <Tentang />
          </Route>
          <Route path="/classes">
            <SemuaKelas />
          </Route>
          <Route path="/contact">
            <Kontak />
          </Route>
          <Route path="/educator">
            <Educator />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/lupakatasandi/1">
            <LupaKataSandi1 />
          </Route>
          <Route exact path="/lupakatasandi/2">
            <LupaKataSandi2 />
          </Route>
          <Route path="/register/educator">
            <RegisterAsEducator1 />
          </Route>
          <Route path="/register/student">
            <RegisterAsStudent />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
