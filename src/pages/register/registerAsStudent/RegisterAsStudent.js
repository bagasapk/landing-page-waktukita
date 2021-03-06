import React, { useState } from "react";
import NavbarRegister from "../../../components/navbar/NavbarRegister";
import hide from "../../../resources/symbols/hide.svg";
import symbol from "../../../resources/symbols/XMLID1386(active).svg";
import "./RegisterAsStudent.css";
import "../Register.css";

const RegisterAsStudent = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  return (
    <div>
      <div className="backgroundLogin">
        <NavbarRegister />
        <section className="register p-0">
          <div className="col-md-6 p-5"></div>
          <div className="jumbotronContainer col-md-6 p-5"></div>
          <div className="loginBox col-md-12">
            <div className="registerContainer p-4 p-md-5">
              <h2 className="titleForm">Register</h2>
              <img className="mx-auto symbolPosition"
                alt="symbol"
                style={{ width: "20px", height: "45px" }}
                src={symbol}
              ></img>
              <form>
                <div
                  style={{ textAlign: "left" }}
                  className="mx-auto d-flex flex-column"
                >
                  <div className="pt-1 pb-3">
                    <label className="m-0">Nama lengkap</label>
                    <input type="text" placeholder="John Doe"></input>
                  </div>
                  <div className="pb-3">
                    <label className="m-0">Email</label>
                    <input type="email" placeholder="info@company.com"></input>
                  </div>
                  <div className="pb-3">
                    <label className="m-0">Nomer ponsel</label>
                    <input type="text" placeholder="+62xxxxxxxxxxx"></input>
                  </div>
                  <div className="pb-3">
                    <label className="m-0">Kata sandi</label>
                    <input
                      id="password"
                      type={passwordShown ? "text" : "password"}
                      placeholder="************"
                    ></input>
                    <i
                      style={{ marginLeft: "-30px", cursor: "pointer" }}
                      onClick={togglePasswordVisiblity}
                    >
                      <img src={hide} alt="hide"></img>
                    </i>
                  </div>
                  <div className="pt-2"></div>
                </div>
                <button className="col-md-8 mx-auto d-flex justify-content-center Primary formButton">
                  Lanjutkan
                </button>
              </form>
                <p style={{color:"#404041", fontSize:'14px'}} className="pt-3">Sudah punya akun? <a style={{color:'#00A69C'}} href="/login">Login disini</a></p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default RegisterAsStudent;
