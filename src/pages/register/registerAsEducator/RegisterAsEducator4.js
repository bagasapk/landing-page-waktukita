import React, { useState } from "react";
import symbolActive from "../../../resources/symbols/XMLID1386(active).svg";
import "./RegisterAsEducator.css";
import "../Register.css";
import NavbarRegister2 from "../navbar/NavbarRegister2";

const RegisterAsEducator4 = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const otpHandler = (element, index) => {
    if (isNaN(element.value)) return false;
    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };
  return (
    <div className="backgroundRegister">
      <NavbarRegister2 />
      <div className="p-3 p-md-5">
        <div className="boxContainer contentPosition">
          <div className="boxFlex col-11 col-md-9 boxSize mx-md-auto d-md-flex justify-content-around">
            <span className="contentColor">Register</span>
            <img
              alt="symbol"
              className="contentColor"
              style={{ width: "20px", height: "45px" }}
              src={symbolActive}
            ></img>
            <span className="contentColor">Informasi Lembaga</span>
            <img
              alt="symbol"
              style={{ width: "20px", height: "45px" }}
              src={symbolActive}
            ></img>
            <span className="contentColor">Lengkapi Informasi</span>
            <img
              alt="symbol"
              style={{ width: "20px", height: "45px" }}
              src={symbolActive}
            ></img>
            <span className="contentColor">Selesai</span>
          </div>
        </div>
        <p className="mx-auto col-md-7 textPosition">
          {/* Informasi ini akan digunakan oleh tim Waktukita dalam
        <span style={{ color: "#00A69C", fontWeight: "bold" }}>{" "}
        proses pembayaran
        </span>
    , dimohon untuk mengisi informasi dengan data terbaru milik Lembaga Pelatihan anda. */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dictum
          viverra pellentesque faucibus duis penatibus eget tortor vel. Vitae
          tortor sagittis, sed bibendum. Egestas neque. (silahkan tekan kirim
          kode untuk mengirim kode verifikasi ke T***a@mail.com)
        </p>
        <div className="pt-3 pb-3">
          <button className="Secondary OtpButton">
            <span className="textButton">Kirim kode</span>
          </button>
        </div>
        <form
          method="get"
          // class="digit-group"
          data-group-name="digits"
          data-autosubmit="false"
          autoComplete="off"
        >
          <div className="d-flex justify-content-around digit-group col-md-9 col-lg-9 col-xl-6 mx-auto p-md-2 px-md-1 px-lg-2">
            {/* <div className="digit-group mx-auto col-md-6"> */}
            {otp.map((data, index) => {
              return (
                  <input
                    className="py-2 px-3 px-lg-4 col-lg-1 col-md-1"
                    type="text"
                    id="digit"
                    name="otp"
                    maxLength="1"
                    key={index}
                    value={data}
                    onChange={(e) => otpHandler(e.target, index)}
                    onFocus={(e) => e.target.select()}
                  />
              );
            })}
            {/* <input type="text" id="digit" name="digit-1" data-next="digit-2" />
          <input
            type="text"
            id="digit"
            name="digit-2"
            data-next="digit-3"
            data-previous="digit-1"
          />
          <input
            type="text"
            id="digit"
            name="digit-3"
            data-next="digit-4"
            data-previous="digit-2"
          /> */}
            {/* <span class="splitter">&ndash;</span> */}
            {/* <input
            type="text"
            id="digit"
            name="digit-4"
            data-next="digit-5"
            data-previous="digit-3"
          />
          <input
            type="text"
            id="digit"
            name="digit-5"
            data-next="digit-6"
            data-previous="digit-4"
          />
          <input
            type="text"
            id="digit"
            name="digit-6"
            data-previous="digit-5"
          /> */}
          </div>
          <div className="pt-5">
            <button
              type="button"
              onClick={(e) => alert("Entered OTP is " + otp.join(""))}
              className="OtpButton Primary col-md-2"
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default RegisterAsEducator4;
