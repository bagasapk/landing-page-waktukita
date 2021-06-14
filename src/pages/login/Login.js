import React, { useState } from 'react';
import NavbarLogin from '../navbar/navbar';
import hide from '../../resources/symbols/hide.svg';
import symbol from '../../resources/symbols/XMLID1386(active).svg';
import './login1.css';
import '../login.css';

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
                                <div className="pt-4 pb-3">
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
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
export default Login;