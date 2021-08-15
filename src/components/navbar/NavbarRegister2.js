import React from "react";
import logo1 from "../../logo1.svg";

import { Navbar } from "react-bootstrap";

const NavbarRegister = () => {
  return (
    <div className="navbarWaktuKita">
      <div className="loginContainer">
        <Navbar
          expand="lg"
          className="pl-0 pl-md-0 px-lg-5 pr-3 pr-lg-0 navbarLogin"
        >
          <div className="pl-5 pl-lg-0">
            <a href="/" style={{ opacity: "1" }}>
              <img className="logoScale" alt="logo" src={logo1}></img>
            </a>
          </div>
        </Navbar>
      </div>
    </div>
  );
};
export default NavbarRegister;
