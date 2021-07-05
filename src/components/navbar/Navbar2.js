import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo1 from "../../resources/images/logo1.svg";
import icon3 from "../../pages/beranda/navbar/layout-module-1.svg";

const Navbar2 = () => {
  return (
    <div>
      <div className="loginContainer">
        <Navbar
          expand="lg"
          className="pl-0 pl-md-0 px-lg-5 pr-3 pr-lg-0 navbarLogin"
        >
          {/* <div className="pl-5 ml-lg-5 navbar navbar-expand-md navbarLogin"> */}
          <div className="pl-5 pl-lg-0">
            <img className="logoScale" alt="logo" src={logo1}></img>
          </div>
          {/* <div className="d-flex col-md-10 justify-content-around"> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="px-5 pb-3 pb-md-0 px-lg-0"
            style={{ zIndex: "1", backgroundColor: "white" }}
          >
            <Nav className="ml-lg-auto col-lg-11 col-xl-8 justify-content-between navColor text-left p-0 align-items-lg-baseline">
              <NavLink exact to="/">Beranda</NavLink>
              <NavDropdown title="Kategori" id="basic-nav-dropdown">
                <NavDropdown.Item
                  class="d-flex align-content-center py-0"
                  href="#action/3.1"
                  style={{ opacity: "1" }}
                >
                  <img className="pr-3" src={icon3} alt="icon"></img>
                  <span className="align-self-center">Analisis Data</span>
                </NavDropdown.Item>
                <NavDropdown.Item
                  class="d-flex align-content-center py-0"
                  href="#action/3.1"
                  style={{ opacity: "1" }}
                >
                  <img className="pr-3" src={icon3} alt="icon"></img>
                  <span className="align-self-center">Bisnis</span>
                </NavDropdown.Item>
                <NavDropdown.Item
                  class="d-flex align-content-center py-0"
                  href="#action/3.1"
                  style={{ opacity: "1" }}
                >
                  <img className="pr-3" src={icon3} alt="icon"></img>
                  <span className="align-self-center">Desain</span>
                </NavDropdown.Item>
                <NavDropdown.Item
                  class="d-flex align-content-center py-0"
                  href="#action/3.1"
                  style={{ opacity: "1" }}
                >
                  <img className="pr-3" src={icon3} alt="icon"></img>
                  <span className="align-self-center">Ekonomi</span>
                </NavDropdown.Item>
                <NavDropdown.Item
                  class="d-flex align-content-center py-0"
                  href="#action/3.1"
                  style={{ opacity: "1" }}
                >
                  <img className="pr-3" src={icon3} alt="icon"></img>
                  <span className="align-self-center">Ilmu komunikasi</span>
                </NavDropdown.Item>
                <NavDropdown.Item
                  class="d-flex align-content-center py-0"
                  href="#action/3.1"
                  style={{ opacity: "1" }}
                >
                  <img className="pr-3" src={icon3} alt="icon"></img>
                  <span className="align-self-center">Kerajinan tangan</span>
                </NavDropdown.Item>
                <NavDropdown.Item
                  class="d-flex align-content-center py-0"
                  href="#action/3.1"
                  style={{ opacity: "1" }}
                >
                  <img className="pr-3" src={icon3} alt="icon"></img>
                  <span className="align-self-center">Marketing</span>
                </NavDropdown.Item>
                <NavDropdown.Item
                  class="d-flex align-content-center py-0"
                  href="#action/3.1"
                  style={{ opacity: "1" }}
                >
                  <img className="pr-3" src={icon3} alt="icon"></img>
                  <span className="align-self-center">Operasional</span>
                </NavDropdown.Item>
                <NavDropdown.Item
                  class="d-flex align-content-center py-0"
                  href="#action/3.1"
                  style={{ opacity: "1" }}
                >
                  <img className="pr-3" src={icon3} alt="icon"></img>
                  <span className="align-self-center">
                    Pengembangan website
                  </span>
                </NavDropdown.Item>
                <NavDropdown.Item
                  class="d-flex align-content-center py-0"
                  href="#action/3.1"
                  style={{ opacity: "1" }}
                >
                  <img className="pr-3" src={icon3} alt="icon"></img>
                  <span className="align-self-center">Seni</span>
                </NavDropdown.Item>
              </NavDropdown>
              <NavLink to="/artikel">Artikel</NavLink>
              <NavLink to="/about">Tentang</NavLink>
              <NavLink to="/contact">Kontak</NavLink>
              <button className="m-md-1 mb-2 mb-lg-0 navButton Secondary">
                <span className="textButton">Student</span>
              </button>
              <button className="m-md-1 m-lg-0 navButton Primary">
                <span className="textButton">Educator</span>
              </button>
            </Nav>
          </Navbar.Collapse>
          {/* </div> */}
        </Navbar>
      </div>
    </div>
    // </div>{}
  );
}; 


export default Navbar2;
