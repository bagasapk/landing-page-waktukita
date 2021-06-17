import React, { useState } from 'react';
import NavbarLogin from '../navbar/navbar';
import hide from '../../resources/symbols/hide.svg';
import symbol from '../../resources/symbols/XMLID1386(active).svg';
import "../testcss.css";
import "./login1.css";
import "../login.css";

const Login = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisibility = () => {
        setPasswordShown(passwordShown ? false : true);
    };
    return (
        <div>
            <div className="backgroundLogin">
                <NavbarLogin />
                <section className="login p-0">
                    <div className="col-md-6"></div>
                    <div className="jumbotronContainer col-md-6"></div>
                    <div className="loginBox col-md-12">
                        <div className="loginContainer">
                            <h1 className="titleForm">Login</h1>
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
                                <div className="pb-3">
                                    <label className="m-0">Email</label>
                                    <input type="email" placeholder="john.doe@gmail.com"></input>
                                </div>
                                <div className="pb-3">
                                    <label className="m-0">Kata sandi</label>
                                    <input
                                    id="password"
                                    type={passwordShown ? "text" : "password"}
                                    placeholder="************"
                                    ></input>{" "}
                                    <i
                                    style={{ marginLeft: "-30px", cursor: "pointer" }}
                                    onClick={togglePasswordVisibility}
                                    >
                                    <img src={hide} alt="hide"></img>
                                    </i>
                                </div>
                                <div className="pt-4"></div>
                                </div>
                                <button className="col-md-8 mx-auto d-flex justify-content-center Primary formButton">
                                Lanjutkan
                                </button>
                            </form>
                            <p style={{color:"#404041", fontSize:'14px'}} className="pt-3">Lupa kata sandi? <a style={{color:'#00A69C'}} href="/">Klik disini</a></p>
                            <p style={{color:"#404041", fontSize:'14px'}} className="pt-3"><a style={{color:"#00A69C"}} href="/">Registrasi</a> atau Login dengan </p>
                            <div className="buttonFlexNav">
                                <button className="navButton facebookButton mb-5">
                                <span className="textButton">Facebook</span>
                                </button>
                                <button className="navButton googleButton mb-5">
                                <span className="textButton">Google</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
export default Login;