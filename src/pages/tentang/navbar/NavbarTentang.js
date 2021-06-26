import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo1 from "../../../resources/images/logo1.svg";
import "./navTentang.css";

const NavbarTentang = () => {
  return (
    <div className="loginContainer">
      <Navbar expand="lg" className="pl-5 pl-lg-1 pr-3 pr-lg-0 ml-lg-5 navbarLogin">
      {/* <div className="pl-5 ml-lg-5 navbar navbar-expand-md navbarLogin"> */}
        <div>
          <img className="logoScale" alt="logo" src={logo1}></img>
        </div>
        {/* <div className="d-flex col-md-10 justify-content-around"> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-lg-auto mr-5 pr-5 col-md-8 justify-content-around navColor text-left">
            <Nav.Link href="#home">Beranda</Nav.Link>
            <NavDropdown title="Kategori" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Artikel</Nav.Link>
            <Nav.Link
              style={{ color: "#00A69C", opacity: "1", fontWeight: "bold" }}
              href="#link"
              >
              Tentang
            </Nav.Link>
            <Nav.Link href="#link">Kontak</Nav.Link>
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
    // </div>
    // </div>
    );
};

export default NavbarTentang;
