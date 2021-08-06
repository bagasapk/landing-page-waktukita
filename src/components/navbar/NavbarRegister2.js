import React from "react";
import logo1 from "../../logo1.svg";

const NavbarRegister = () => {
  return (
    <div className="registerContainer">
      <div className="navbarLogin ml-lg-5 d-flex">
      <a href="/" style={{opacity:'1'}}><img className="logoScale" alt="logo" src={logo1}></img></a>
      </div>
    </div>
  );
};
export default NavbarRegister;
