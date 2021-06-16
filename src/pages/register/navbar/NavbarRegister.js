import React from "react";
// import { Link } from "react-router-dom";
import logo1 from "../../../logo1.svg";

const NavbarRegister = () => {
  return (
    <div className="registerContainer">
      <div className="navbarRegister">
        <a href="/">
          <img alt="logo" src={logo1}></img>
        </a>
        <div className="col-lg-5">
          <div className="buttonFlexNav">
            <span
              style={{ color: "#404041", opacity: "0.5" }}
              className="textButton "
            >
              Register Sebagai ?
            </span>
            <div className="col-lg-7">
              <div className="buttonFlexNav">
                <a href="/register/student" className="navButton Secondary">
                  <span className="textButton">Student</span>
                </a>
                <a href="/register/educator/1" className="navButton Primary">
                  <span className="textButton">Educator</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavbarRegister;
