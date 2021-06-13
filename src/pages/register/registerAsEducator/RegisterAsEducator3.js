import React, { useState } from "react";
import symbol from "../../../symbol/XMLID1386.svg";
import symbolActive from "../../../symbol/XMLID1386(active).svg";
import "./RegisterAsEducator.css";
import "../Register.css";
import NavbarRegister2 from "../navbar/NavbarRegister2";

const RegisterAsEducator3 = (props) => {
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
      <NavbarRegister2 />
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
            src={symbolActive}
          ></img>
          <span className="contentColor">Lengkapi Informasi</span>
          <img
            alt="symbol"
            style={{ width: "20px", height: "45px" }}
            src={symbol}
          ></img>
          <span>Selesai</span>
        </div>
      </div>
      <p className="mx-auto col-md-7 textPosition">
      Informasi ini akan digunakan oleh tim Waktukita dalam
        <span style={{ color: "#00A69C", fontWeight: "bold" }}>{" "}
        proses pembayaran
        </span>
        , dimohon untuk mengisi informasi dengan data terbaru milik Lembaga Pelatihan anda.
      </p>
      <form>
        <div
          style={{ textAlign: "left" }}
          className="col-md-5 mx-auto d-flex flex-column"
        >
          <div className="pt-4 pb-3">
            <label className="m-0">Nomor NPWP</label>
            <input type="text"></input>
          </div>
          <div className="pb-3">
            <label className="m-0">Scan NPWP</label>
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
              <span style={{ color: "#CACACA" }}> Belum ada file yang dipilih</span>
            </div>
          </div>  
          <div className="pb-3">
            <label className="m-0">Status pajak</label>
            <select style={{ color: "#767676" }} id="Status pajak" name="Status pajak">
              <option value="" disabled selected>
              </option>
              <option value="volvo">Volvo</option>
            </select>
          </div>
          <div className="pb-3">
            <label className="m-0">
              Nomor rekening
            </label>
            <input type="text"></input>
          </div>
          <div className="pb-3">
            <label className="m-0">Nama rekening</label>
            <input type="text"></input>
          </div>
          <div className="pb-3">
            <label className="m-0">Nama bank</label>
            <select style={{ color: "#CACACA" }} id="Nama bank" name="Nama bank">
              <option value="" disabled selected>
                Bank Central Asia (BCA)
              </option>
              <option value="volvo">Volvo</option>
            </select>
          </div>
          <div className="pb-3">
            <label className="m-0">
              Email tim keuangan{" "}
              <span style={{ color: "#C4c4c4" }}>
                (untuk pemberitahuan pembayaran)
              </span>
            </label>
            <input type="text" placeholder="john.doe@company.com"></input>
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
export default RegisterAsEducator3;
