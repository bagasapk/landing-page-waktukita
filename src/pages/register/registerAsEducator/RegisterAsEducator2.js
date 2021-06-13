import React, { useState } from "react";
import symbol from "../../../symbol/XMLID1386.svg";
import symbolActive from "../../../symbol/XMLID1386(active).svg";
import "./RegisterAsEducator.css";
import "../Register.css";
import NavbarRegister from "../navbar/NavbarRegister";

const RegisterAsEducator2 = (props) => {
  const [isFileUploaded, setFileUploaded] = useState(false);
  const hiddenFileInput = React.useRef(null);
  const handleClick = () => {
    hiddenFileInput.current.click();
  };
  const handleChange = (event) => {
    // var fileUploaded = false;
    const fileUploads = event.target.files[0];
    props.handleFile(fileUploads);
    // fileUploaded = true;
    setFileUploaded(isFileUploaded ? false : true);
  };

  return (
    <div className="backgroundRegister">
      <NavbarRegister />
      <div className="boxContainer contentPosition">
        <div className="boxFlex col-md-8 boxSize">
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
        Informasi ini akan digunakan oleh tim Waktukita dalam{" "}
        <span style={{ color: "#00A69C", fontWeight: "bold" }}>
          proses pengecekan kelengkapan persyaratan
        </span>{" "}
        yang diperlukan untuk mendaftar sebagai Lembaga Pelatihan atau Educator.
      </p>
      <form>
        <div
          style={{ textAlign: "left" }}
          className="col-md-5 mx-auto d-flex flex-column"
        >
          <div className="pt-4 pb-3">
            <label className="m-0">Nama lembaga</label>
            <input type="text" placeholder="John Doe"></input>
          </div>
          <div className="pb-3">
            <label className="m-0">Lembaga</label>
            <select style={{ color: "#767676" }} id="lembaga" name="lembaga">
              <option value="" disabled selected>
                Swasta, BUMN, BUMD
              </option>
              <option value="volvo">Volvo</option>
            </select>
          </div>
          <div className="pb-3">
            <label className="m-0">
              Alamat domisili{" "}
              <span style={{ color: "#C4c4c4" }}>
                (sesuai alamat yang tertera di NIB)
              </span>
            </label>
            <input type="text"></input>
          </div>
          <div className="pb-3">
            <label className="m-0">Kode pos</label>
            <input type="text" placeholder="+62xxxxxxxxxxx"></input>
          </div>
          <div className="pb-3">
            <label className="m-0">Negara</label>
            <select style={{ color: "#767676" }} id="negara" name="negara">
              <option value="" disabled selected>
                Indonesia
              </option>
              <option value="volvo">Volvo</option>
            </select>
          </div>
          <div className="pb-3">
            <label className="m-0">Provinsi</label>
            <select style={{ color: "#767676" }} id="provinsi" name="provinsi">
              <option value="" disabled selected>
                DKI Jakarta
              </option>
              <option value="volvo">Volvo</option>
            </select>
          </div>
          <div className="pb-3">
            <label className="m-0">Logo lembaga</label>
            <div className="buttonFile">
              <button className="buttonDesign" onClick={handleClick}>
                <span className="buttonText">Pilih File</span>
              </button>
              <input
                style={
                  isFileUploaded ? { position: "static" } : { display: "none" }
                }
                type="file"
                ref={hiddenFileInput}
                onChange={handleChange}
              ></input>
              <span className="buttonText"> Belum ada file yang dipilih</span>
            </div>
          </div>
          <p className="textPosition">
            Silakan isi dengan data penanggung jawab
          </p>
          <div className="pb-3">
            <label className="m-0">Nama lengkap</label>
            <input type="text" placeholder="John Doe"></input>
          </div>
          <div className="pb-3">
            <label className="m-0">Jabatan</label>
            <select style={{ color: "#767676" }} id="jabatan" name="jabatan">
              <option value="" disabled selected>
                CEO, COO, Manager, Staff
              </option>
              <option value="volvo">Volvo</option>
            </select>
          </div>
          <div className="pb-3">
            <label className="m-0">Email</label>
            <input type="email" placeholder="info@company.com"></input>
          </div>
          <div className="pb-3">
            <label className="m-0">Nomer ponsel</label>
            <input type="text" placeholder="+62xxxxxxxxxxx"></input>
          </div>
          <div className="pt-2"></div>
        </div>
        <button className="col-md-3 mx-auto d-flex justify-content-center Primary formButton">
          Lanjutkan
        </button>
      </form>
    </div>
  );
};
export default RegisterAsEducator2;
