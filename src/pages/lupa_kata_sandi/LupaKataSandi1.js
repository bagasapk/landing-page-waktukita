import React, { useState } from 'react';
import NavbarLogin from '../navbar/navbar';
import hide from '../../resources/symbols/hide.svg';
import symbol from '../../resources/symbols/XMLID1386(active).svg';
import "../testcss.css";
import "../login/login1.css";
import "../login.css";

const LupaKataSandi1 = () => {
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
                            <h1 className="titleForm">Lupa kata sandi ?</h1>
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
                                <p>Silahkan masukkan email kamu untuk setel ulang kata sandi</p>
                                <div className="pb-3">
                                    <label className="m-0">Email</label>
                                    <input type="email" placeholder="john.doe@gmail.com"></input>
                                </div>
                                <div className="pt-4"></div>
                                </div>
                                <button className="mb-4 col-md-8 mx-auto d-flex justify-content-center Primary formButton">
                                Setel ulang kata sandi
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
export default LupaKataSandi1;