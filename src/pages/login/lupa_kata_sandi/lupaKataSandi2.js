// import React, { useState } from 'react';
import React from 'react';
import NavbarLogin from '../navbar/navbar';
// import hide from '../../resources/symbols/hide.svg';
import symbol from '../../../resources/symbols/XMLID1386(active).svg'
import "../testcss.css";
import "../login1.css";
import "../login.css";

const LupaKataSandi2 = () => {
    // const [passwordShown, setPasswordShown] = useState(false);
    // const togglePasswordVisibility = () => {
    //     setPasswordShown(passwordShown ? false : true);
    // };
    
    return (
        <div>
            <div className="backgroundLogin">
                <NavbarLogin />
                <section className="login p-0">
                    <div className="col-md-6"></div>
                    <div className="jumbotronContainer col-md-6"></div>
                    <div style={{top:'32%'}} className="loginBox col-md-12">
                        <div className="loginContainer">
                            <h2 className="titleForm">Lupa kata sandi ?</h2>
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
                                <p style={{fontFamily:'Lato'}}>Email untuk mengatur kata sandi Kamu sudah terkirim ke alamat john.doe@gmail.com</p>
                                <div className="pt-4"></div>
                                </div>
                                <button className="mb-4 col-md-8 mx-auto d-flex justify-content-center Primary formButton">
                                Masuk kembali
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
export default LupaKataSandi2;