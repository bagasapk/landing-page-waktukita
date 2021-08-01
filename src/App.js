import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import LupaKataSandi1 from "./pages/login/lupa_kata_sandi/LupaKataSandi1";
import LupaKataSandi2 from "./pages/login/lupa_kata_sandi/lupaKataSandi2";
import RegisterAsEducator1 from "./pages/register/registerAsEducator/RegisterAsEducator1";
import RegisterAsEducator4 from "./pages/register/registerAsEducator/RegisterAsEducator4";
import RegisterAsStudent from "./pages/register/registerAsStudent/RegisterAsStudent";
import Tentang from "./pages/tentang/Tentang";
import Kontak from "./pages/kontak/Kontak";
import Beranda from "./pages/beranda/Beranda";
import SemuaKelas from "./pages/semuaKelas/SemuaKelas";
import Educator from "./pages/educator/Educator";
import RincianKelas from "./pages/rincianKelas/RincianKelas";
import Payment from "./pages/payment/Payment";
import Student from "./dashboard/student/Student";

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
          <Route exact path="/classes">
            <SemuaKelas />
          </Route>
          <Route exact path="/classes/detail">
            <RincianKelas />
          </Route>
          <Route path="/classes/detail/payment">
            <Payment />
          </Route>
          <Route path="/contact">
            <Kontak />
          </Route>
          <Route path="/dashboard">
            <Student />
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
          <Route path="/lupakatasandi/2">
            <LupaKataSandi2 />
          </Route>
          <Route exact path="/register/educator">
            <RegisterAsEducator1 />
          </Route>
          <Route path="/register/educator/verification">
            <RegisterAsEducator4 />
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
