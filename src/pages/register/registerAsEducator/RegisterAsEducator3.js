import React, { useState } from "react";
import symbol from "../../../resources/symbols/XMLID1386.svg";
import symbolActive from "../../../resources/symbols/XMLID1386(active).svg";
import "./RegisterAsEducator.css";
import "../Register.css";
import NavbarRegister2 from "../navbar/NavbarRegister2";
import PopUpRegister from "./popUp/PopUpRegister";
import symbolPopUp from "./popUp/Group2981.svg";

const RegisterAsEducator3 = (props) => {
  //Upload File Button
  const [selectedFile, setSelectedFile] = useState([]);
  const [fileName, setFileName] = useState("");
  const [isFilePicked, setIsFilePicked] = useState(false);
  const handleChange = (event) => {
    setSelectedFile([...selectedFile, event.target.files[0]]);
    console.log("files :", selectedFile);
    setIsFilePicked(isFilePicked ? false : true);
    setFileName([...fileName, event.target.files[0].name]);
  };

  //StatusPajak Set Color
  const [isSetValueStatusPajak, setValueStatusPajak] = useState(false);
  const setValueStatusPajakHandler = () => {
    setValueStatusPajak(isSetValueStatusPajak ? false : true);
  };

  //Bank Set Color
  const [isSetValueBank, setValueBank] = useState(false);
  const setValueBankHandler = () => {
    setValueBank(isSetValueBank ? false : true);
  };

  //Popup Handler
  const [popUp, setPopUp] = useState(false);

  return (
    <div className="backgroundRegister">
      <NavbarRegister2 />
      <div className="p-5">
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
          <span style={{ color: "#00A69C", fontWeight: "bold" }}>
            {" "}
            proses pembayaran
          </span>
          , dimohon untuk mengisi informasi dengan data terbaru milik Lembaga
          Pelatihan anda.
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
                <label htmlFor="file-upload" className="buttonDesign m-0 p-1">
                  <span className="buttonText">Pilih File</span>
                </label>
                <input
                  style={{ display: "none" }}
                  id="file-upload"
                  type="file"
                  onChange={(event) => handleChange(event)}
                ></input>
                <span
                  className="pl-3"
                  style={
                    isFilePicked ? { color: "black" } : { color: "#CACACA" }
                  }
                >
                  {isFilePicked ? fileName : " Belum ada file yang dipilih"}
                </span>
              </div>
            </div>
            <div className="pb-3">
              <label className="m-0">Status pajak</label>
              <select
                style={
                  isSetValueStatusPajak
                    ? { color: "black" }
                    : { color: "#CACACA" }
                }
                id="Status pajak"
                name="Status pajak"
                onChange={setValueStatusPajakHandler}
                defaultValue=""
              >
                <option value="" disabled></option>
                <option value="volvo">Volvo</option>
              </select>
            </div>
            <div className="pb-3">
              <label className="m-0">Nomor rekening</label>
              <input type="text"></input>
            </div>
            <div className="pb-3">
              <label className="m-0">Nama rekening</label>
              <input type="text"></input>
            </div>
            <div className="pb-3">
              <label className="m-0">Nama bank</label>
              <select
                style={
                  isSetValueBank ? { color: "black" } : { color: "#CACACA" }
                }
                id="Nama bank"
                name="Nama bank"
                onChange={setValueBankHandler}
                defaultValue=""
              >
                <option value="" disabled>
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
            <div className="">
              <input required type="checkbox"></input>
              <label className="pl-2">
                Informasi yang saya berikan adalah benar dan terpercaya
              </label>
            </div>
            <div>
              <input required type="checkbox"></input>
              <label className="pl-2 pb-3">
                Saya sudah membaca dan setuju dengan peraturan yang ada
              </label>
            </div>
          </div>
          <div>
            <button
              type="button"
              style={{ cursor: "pointer" }}
              onClick={() => setPopUp(true)}
              className="col-md-3 mx-auto d-flex justify-content-center Primary formButton"
            >
              Lanjutkan
            </button>
          </div>
          <PopUpRegister trigger={popUp}>
            <div>
              <div className="pb-3">
                <img alt="symbol" src={symbolPopUp}></img>
              </div>
              <p
                style={{ color: "#404041", fontSize: "20px" }}
                className="col-md-10 mx-auto"
              >
                Pastikan email sudah benar, dan email yang dicantumkan sudah
                dapat menerima verifikasi
              </p>
              <div className="d-flex col-md-8 mx-auto justify-content-around">
                <button
                  type="button"
                  onClick={() => setPopUp(false)}
                  className="navButton Secondary"
                >
                  <span className="textButton">Kembali</span>
                </button>
                <button className="navButton Primary">
                  <span className="textButton">Lanjutkan</span>
                </button>
              </div>
            </div>
          </PopUpRegister>
        </form>
      </div>
    </div>
  );
};
export default RegisterAsEducator3;
