import React from "react";
import logo1 from "../../../resources/images/logo1.svg";

const NavbarLogin = () => {
  return (
    <div className="loginContainer">
      <div className="navbar navbar-light navbar-expand-lg navbarLogin">
        <div className="pl-5 ml-lg-5">
          <img className="logoScale" alt="logo" src={logo1}></img>
        </div>
        <div className="pr-3">
          <button
            class="p-1 navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="ml-auto">
            <div className="d-flex justify-content-md-around justify-content-lg-end col-lg-9">
              <div className="d-flex col-lg-7">
                <span
                  style={{ color: "#404041", opacity: "0.5" }}
                  className="textButton"
                >
                  Login Sebagai ?
                </span>
              </div>
              <div className="d-flex justify-content-around col-lg-12">
                <div>
                  <button className="navButton Secondary">
                    <span className="textButton">Student</span>
                  </button>
                </div>
                <div>
                  <button className="navButton Primary">
                    <span className="textButton">Educator</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavbarLogin;
