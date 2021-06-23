import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo1 from "../../../resources/images/logo1.svg";
import './navTentang.css'

const NavbarTentang = () => {
  return (
    <div className="loginContainer">
      <div className="navbar navbar-expand-md navbarLogin">
        <div>
          <img className="logoScale" alt="logo" src={logo1}></img>
        </div>
        {/* <div className="d-flex col-md-10 justify-content-around"> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto mr-5 pr-5 col-md-8 justify-content-around navColor">
              <Nav.Link href="#home">Beranda</Nav.Link>
              <NavDropdown title="Kategori" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link">Artikel</Nav.Link>
              <Nav.Link style={{color:'#00A69C', opacity:'1', fontWeight:'bold'}} href="#link">Tentang</Nav.Link>
              <Nav.Link href="#link">Kontak</Nav.Link>
              <button className="navButton Secondary">
                <span className="textButton">Student</span>
              </button>
              <button className="navButton Primary">
                <span className="textButton">Educator</span>
              </button>
            </Nav>
          </Navbar.Collapse>
        </div>
      </div>
    // </div>
    // </div>
  );
};

export default NavbarTentang;
