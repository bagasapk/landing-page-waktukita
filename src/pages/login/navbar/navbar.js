import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo1 from "../../../resources/images/logo1.svg";

const NavbarLogin = () => {
  return (
    <div className="loginContainer">
      <Navbar expand="lg" className="navbarLogin">
        <div className="pl-5 ml-lg-5">
          <img className="logoScale" alt="logo" src={logo1}></img>
        </div>
        <div className="pr-3">
          <Navbar.Toggle
            class="p-1 navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="basic-navbar-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </Navbar.Toggle>
        </div>
        <Navbar.Collapse
          class="collapse navbar-collapse"
          id="basic-navbar-nav"
          style={{ zIndex: "1", backgroundColor: "white" }}
        >
          <Nav className=" ml-auto navbar-nav p-3 p-md-0  ">
            <Nav className="nav-item d-flex justify-content-md-around justify-content-lg-end col-lg-9">
              <Nav className="m-md-1 m-1 m-lg-0 mt-md-3 d-flex col-lg-7">
                <span
                  style={{ color: "#404041", opacity: "0.5" }}
                  className="textButton"
                >
                  Login Sebagai ?
                </span>
              </Nav>
              <Nav className="d-flex justify-content-around col-lg-12">
                <Nav>
                  <button className="m-md-1 m-1 m-lg-0  navButton Secondary">
                    <span className="textButton">Student</span>
                  </button>
                </Nav>
                <Nav>
                  <button className="m-md-1 m-1 m-lg-0 navButton Primary">
                    <span className="textButton">Educator</span>
                  </button>
                </Nav>
              </Nav>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
export default NavbarLogin;
