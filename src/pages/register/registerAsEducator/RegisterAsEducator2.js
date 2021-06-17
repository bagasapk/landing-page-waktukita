import React, { useState } from "react";
import symbol from "../../../symbol/XMLID1386.svg";
import symbolActive from "../../../symbol/XMLID1386(active).svg";
import "./RegisterAsEducator.css";
import "../Register.css";
import NavbarRegister2 from "../navbar/NavbarRegister2";

const RegisterAsEducator2 = (props) => {
  //Dropdown Negara
  const [isNegara, setNegara] = useState("");
  const [isIndonesia, setIndonesia] = useState(false);
  const [isSetNegara, setNegaraColor] = useState(false);
  const [addrtype] = useState(["Belanda", "Indonesia", "Jepang"]);
  const Add = addrtype.map((Add) => Add);
  const handleAddrTypeChange = (e) => {
    console.log(addrtype[e.target.value]);
    setNegara(addrtype[e.target.value]);
    setNegaraColor(isSetNegara ? true : true);
    if (addrtype[e.target.value] === "Indonesia") {
      setIndonesia(isIndonesia ? false : true);
    } else {
      setIndonesia(isIndonesia ? false : false);
    }
  };

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

  //Lembaga Set Color
  const [isSetValueLembaga, setValueLembaga] = useState(false);
  const setValueLembagaHandler = () => {
    setValueLembaga(isSetValueLembaga ? false : true);
  };

  //Jabatan set Color
  const [isSetValueJabatan, setValueJabatan] = useState(false);
  const setValueJabatanHandler = () => {
    setValueJabatan(isSetValueJabatan ? false : true);
  };

  //Provinsi set Color
  const [isSetProvinsi, setProvinsi] = useState(false);
  const setProvinsiHandler = () => {
    setProvinsi(isSetProvinsi ? false : true);
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
            <select
              style={
                isSetValueLembaga ? { color: "black" } : { color: "#CACACA" }
              }
              id="lembaga"
              name="lembaga"
              onChange={setValueLembagaHandler}
            >
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
            <select
              style={isSetNegara ? { color: "black" } : { color: "#CACACA" }}
              onChange={(e) => handleAddrTypeChange(e)}
              // className="browser-default custom-select"
            >
              {Add.map((address, key) => (
                <option key={key} value={key}>
                  {address}
                </option>
              ))}
              <option value="" disabled>
                Negara
              </option>
            </select>
          </div>
          {isIndonesia ? (
            <div className="pb-3">
              <label className="m-0">Provinsi</label>
              <select
                style={
                  isSetProvinsi ? { color: "black" } : { color: "#CACACA" }
                }
                id="provinsi"
                name="provinsi"
                onChange={setProvinsiHandler}
              >
                <option value="" disabled selected>
                  DKI Jakarta
                </option>
                <option value="volvo">Volvo</option>
              </select>
            </div>
          ) : null}
          <div className="pb-3">
            <label className="m-0">Logo lembaga</label>
            <div className="buttonFile">
              <label for="file-upload" class="buttonDesign m-0 p-1">
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
                style={isFilePicked ? { color: "black" } : { color: "#CACACA" }}
              >
                {isFilePicked ? fileName : " Belum ada file yang dipilih"}
              </span>
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
            <select
              style={
                isSetValueJabatan ? { color: "black" } : { color: "#CACACA" }
              }
              id="jabatan"
              name="jabatan"
              onChange={setValueJabatanHandler}
            >
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
