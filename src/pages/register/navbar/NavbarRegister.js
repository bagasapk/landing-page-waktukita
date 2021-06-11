import React from "react";
import logo1 from "../../../logo1.svg";

const NavbarRegister = () => {
  return (
    <div className="registerContainer">
      <div className="navbarRegister">
        <img alt="logo" src={logo1}></img>
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
export default NavbarRegister;
