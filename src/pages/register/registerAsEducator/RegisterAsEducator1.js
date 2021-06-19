import React, {useState} from "react";
import symbol from "../../../symbol/XMLID1386.svg";
import hide from "../../../symbol/hide.svg";
import "./RegisterAsEducator.css";
import "../Register.css"
import NavbarRegister from '../navbar/NavbarRegister'

const RegisterAsEducator1 = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  return (
    <div className="backgroundRegister">
        <NavbarRegister/>

      <div className="p-5">
        <div className="boxContainer contentPosition">
          <div className="boxFlex col-md-8 boxSize">
            <span className="contentColor">Register</span>
            <img
              alt="symbol"
              className="contentColor"
              style={{ width: "20px", height: "45px" }}
              src={symbol}
            ></img>
            <span>Informasi Lembaga</span>
            <img
              alt="symbol"
              style={{ width: "20px", height: "45px" }}
              src={symbol}
            ></img>
            <span>Lengkapi Informasi</span>
            <img
              alt="symbol"
              style={{ width: "20px", height: "45px" }}
              src={symbol}
            ></img>
            <span>Selesai</span>
          </div>
        </div>
        <p className="mx-auto col-md-7 textPosition">
          Informasi ini merupakan informasi akun Lembaga Pelatihan di
          Waktukita.com dan tidak dapat diubah.{" "}
          <span style={{ color: "#00A69C", fontWeight: "bold" }}>
            Gunakan email umum resmi Lembaga Pelatihan
          </span>{" "}
          dan bukan email resmi pegawai
        </p>
        <form>
          <div style={{ textAlign: "left" }} className="col-md-5 mx-auto d-flex flex-column">
            <div className="pt-4 pb-3">
              <label className="m-0">Nama lembaga</label>
              <input type="text" placeholder="John Doe"></input>
            </div>
            <div className="pb-3">
              <label className="m-0">Email</label>
              <input type="email" placeholder="info@company.com"></input>
            </div>
            <div className="pb-3">
              <label className="m-0">Nomer handphone</label>
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
                onClick={togglePasswordVisiblity}
              >
                <img src={hide} alt="hide"></img>
              </i>
            </div>
            <div className="pt-2"></div>
          </div>
          <button className="col-md-3 mx-auto d-flex justify-content-center Primary formButton">
            Lanjutkan
          </button>
        </form>
      </div>

    </div>
  );
};
export default RegisterAsEducator1;