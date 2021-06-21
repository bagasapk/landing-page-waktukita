import React from "react";
import logo1 from "../../../resources/images/logo1.svg";

const NavbarLogin = () => {
  return (
    <div className="loginContainer">
      <div className="navbar navbarLogin">
        <div>
          <img className="logoScale" alt="logo" src={logo1}></img>
        </div>
        <div className="col-lg-4">
          <div className="buttonFlexNav">
            <span
              style={{ color: "#404041", opacity: "0.5" }}
              className="textButton "
            >
              Login Sebagai ?
            </span>
            <div className="col-lg-8">
              <div className="buttonFlexNav">
                <button className="navButton Secondary">
                  <span className="textButton">Student</span>
                </button>
                <button className="navButton Primary">
                  <span className="textButton">Educator</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavbarLogin;
