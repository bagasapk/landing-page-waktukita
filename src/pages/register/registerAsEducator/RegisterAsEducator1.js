import React, { useState } from "react";
import symbol from "../../../resources/symbols/XMLID1386.svg";
import symbolActive from "../../../resources/symbols/XMLID1386(active).svg";
import hide from "../../../resources/symbols/hide.svg";
import "./RegisterAsEducator.css";
import "../Register.css";
import NavbarRegister from "../../../components/navbar/NavbarRegister";
import NavbarRegister2 from "../../../components/navbar/NavbarRegister2";
import PopUpRegister from "./popUp/PopUpRegister.js";
import symbolPopUp from "./popUp/Group2981.svg";
import { useForm } from "react-hook-form";

const RegisterAsEducator1 = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm({mode:"all"});
  const onSubmit = (values) => {
    window.alert(JSON.stringify(values, null, 2));
  };

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const [, setNegara] = useState("");
  const [isIndonesia, setIndonesia] = useState(false);
  const [isSetNegara, setNegaraColor] = useState(false);
  const [addrtype] = useState(["Belanda", "Indonesia", "Jepang"]);
  const Add = addrtype.map((Add) => Add);
  const handleAddrTypeChange = (e) => {
    // console.log(addrtype[e.target.value]);
    setNegara(addrtype[e.target.value]);
    setNegaraColor(isSetNegara ? true : true);
    if (addrtype[e.target.value] === "Indonesia") {
      setIndonesia(isIndonesia ? true : true);
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

  //Upload File Button
  const [selectedFile2, setSelectedFile2] = useState([]);
  const [fileName2, setFileName2] = useState("");
  const [isFilePicked2, setIsFilePicked2] = useState(false);
  const handleChange2 = (event) => {
    setSelectedFile2([...selectedFile2, event.target.files[0]]);
    console.log("files :", selectedFile2);
    setIsFilePicked2(isFilePicked2 ? false : true);
    setFileName2([...fileName2, event.target.files[0].name]);
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

  //Form step
  const [formStep, setFormStep] = useState(0);
  const completeFormStep = () => {
    window.scrollTo(0, 0);
    setFormStep((cur) => cur + 1);
  };
  const renderButton = () => {
    if (formStep >= 2) {
      return undefined;
    } else {
      return (
        <button
          disabled={!isValid}
          onClick={completeFormStep}
          type="button"
          className="col-md-3 mx-auto d-flex justify-content-center Primary formButton"
        >
          Lanjutkan
        </button>
      );
    }
  };
  const prevToRegister = () => {
    window.scrollTo(0, 0);
    setFormStep(0);
  };
  const prevToInformasiLembaga = () => {
    window.scrollTo(0, 0);
    setFormStep(1);
  };
  return (
    <div className="backgroundLogin">
      <form onSubmit={handleSubmit(onSubmit)}>
        {formStep === 0 && (
          <section>
            <div className="backgroundRegister">
              <NavbarRegister />
              <div className="p-3 p-md-5">
                <div className="boxContainer contentPosition">
                  <div className="boxFlex col-11 col-md-9 boxSize mx-md-auto d-md-flex justify-content-around">
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
                <p className="pt-3 mx-auto col-md-6 textPosition">
                  Informasi ini merupakan informasi akun Lembaga Pelatihan di
                  Waktukita.com dan tidak dapat diubah.{" "}
                  <span style={{ color: "#00A69C", fontWeight: "bold" }}>
                    Gunakan email umum resmi Lembaga Pelatihan
                  </span>{" "}
                  dan bukan email resmi pegawai
                </p>
                <div
                  style={{ textAlign: "left" }}
                  className="col-md-5 mx-auto d-flex flex-column"
                >
                  <div className="pt-4 pb-3">
                    <label htmlFor="namaLembaga" className="m-0">
                      Nama lembaga
                    </label>
                    <input
                      id="namaLembaga"
                      type="text"
                      placeholder="John Doe"
                      autoFocus
                      {...register("namaLembaga", {
                        required: { value: true },
                      })}
                    ></input>
                  </div>
                  <div className="pb-3">
                    <label htmlFor="email" className="m-0">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="info@company.com"
                      {...register("email", { required: { value: true } })}
                    ></input>
                  </div>
                  <div className="pb-3">
                    <label className="m-0">Nomer handphone</label>
                    <input
                      type="tel"
                      placeholder="+62xxxxxxxxxxx"
                      {...register("nomerHandphone", {
                        required: { value: true },
                      })}
                    ></input>
                  </div>
                  <div className="pb-3">
                    <label className="m-0">Kata sandi</label>
                    <input
                      id="password"
                      type={passwordShown ? "text" : "password"}
                      placeholder="************"
                      {...register("password", { required: { value: true } })}
                    ></input>{" "}
                    <i
                      style={{ marginLeft: "-30px", cursor: "pointer" }}
                      onClick={togglePasswordVisiblity}
                    >
                      <img src={hide} alt="hide"></img>
                    </i>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {formStep === 1 && (
          <section>
            <div className="backgroundRegister">
              <NavbarRegister2 />
              <div className="p-3 p-md-5">
                <div className="boxContainer contentPosition">
                  <div className="boxFlex col-11 col-md-9 boxSize mx-md-auto d-md-flex justify-content-around">
                    <button
                      type="button"
                      onClick={prevToRegister}
                      className="pr-3 pl-3 contentColor"
                    >
                      Register
                    </button>
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
                <p className="mx-auto col-md-6 textPosition">
                  Informasi ini akan digunakan oleh tim Waktukita dalam{" "}
                  <span style={{ color: "#00A69C", fontWeight: "bold" }}>
                    proses pengecekan kelengkapan persyaratan
                  </span>{" "}
                  yang diperlukan untuk mendaftar sebagai Lembaga Pelatihan atau
                  Educator.
                </p>
                <div
                  style={{ textAlign: "left" }}
                  className="col-md-5 mx-auto d-flex flex-column"
                >
                  <div className="pt-4 pb-3">
                    <label className="m-0">Nama perusahaan</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      {...register("namaPerusahaan", {
                        required: { value: true },
                      })}
                    ></input>
                  </div>
                  <div className="pb-3">
                    <label className="m-0">Bentuk lembaga</label>
                    <select
                      style={
                        isSetValueLembaga
                          ? { color: "black" }
                          : { color: "#CACACA" }
                      }
                      id="lembaga"
                      {...register("bentukLembaga", {
                        required: { value: true },
                      })}
                      onChange={setValueLembagaHandler}
                      // defaultValue=""
                    >
                      <option value="">Swasta, BUMN, BUMD</option>
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
                    <input
                      type="text"
                      {...register("alamatDomisili", {
                        required: { value: true },
                      })}
                    ></input>
                  </div>
                  <div className="pb-3">
                    <label className="m-0">Kode pos</label>
                    <input
                      type="text"
                      {...register("kodePos", {
                        required: { value: true },
                      })}
                    ></input>
                  </div>
                  <div className="pb-3">
                    <label className="m-0">Negara</label>
                    <select
                      {...register("negara", { required: { value: true } })}
                      defaultValue=""
                      style={
                        isSetNegara ? { color: "black" } : { color: "#CACACA" }
                      }
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
                        {...register("provinsi", { required: { value: true } })}
                        style={
                          isSetProvinsi
                            ? { color: "black" }
                            : { color: "#CACACA" }
                        }
                        id="provinsi"
                        onChange={setProvinsiHandler}
                        // defaultValue=""
                      >
                        <option value="">DKI Jakarta</option>
                        <option value="volvo">Volvo</option>
                      </select>
                    </div>
                  ) : null}
                  <div className="pb-3">
                    <label className="m-0">Logo lembaga</label>
                    <div className="buttonFile">
                      <label
                        htmlFor="file-upload"
                        className="buttonDesign m-0 p-1"
                      >
                        <span className="buttonText">Pilih File</span>
                      </label>
                      <input
                        {...register('file')}
                        style={{ display: "none" }}
                        id="file-upload"
                        type="file"
                        onChange={(event) => handleChange(event)}
                      ></input>
                      <span
                        className="pl-3"
                        style={
                          isFilePicked
                            ? { color: "black" }
                            : { color: "#CACACA" }
                        }
                      >
                        {isFilePicked
                          ? fileName
                          : " Belum ada file yang dipilih"}
                      </span>
                    </div>
                  </div>
                  <p className="textPosition">
                    Silakan isi dengan data penanggung jawab
                  </p>
                  <div className="pb-3">
                    <label className="m-0">Nama lengkap</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      {...register("namaLengkap", {
                        required: { value: true },
                      })}
                    ></input>
                  </div>
                  <div className="pb-3">
                    <label className="m-0">Jabatan</label>
                    <select
                      {...register("jabatan", { required: { value: true } })}
                      style={
                        isSetValueJabatan
                          ? { color: "black" }
                          : { color: "#CACACA" }
                      }
                      id="jabatan"
                      onChange={setValueJabatanHandler}
                      // defaultValue=""
                    >
                      <option value="">CEO, COO, Manager, Staff</option>
                      <option value="volvo">Volvo</option>
                    </select>
                  </div>
                  <div className="pb-3">
                    <label className="m-0">Email</label>
                    <input
                      type="email"
                      placeholder="info@company.com"
                      {...register("emailPerusahaan", {
                        required: { value: true },
                      })}
                    ></input>
                  </div>
                  <div className="pb-3">
                    <label className="m-0">Nomer ponsel</label>
                    <input
                      type="text"
                      placeholder="+62xxxxxxxxxxx"
                      {...register("nomerPonsel", {
                        required: { value: true },
                      })}
                    ></input>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {formStep === 2 && (
          <section>
            <div className="backgroundRegister">
              <NavbarRegister2 />
              <div className="p-3 p-md-5">
                <div className="boxContainer contentPosition">
                  <div className="boxFlex col-11 col-md-9 boxSize mx-md-auto d-md-flex justify-content-around">
                    <button
                      type="button"
                      onClick={prevToRegister}
                      className="pr-3 pl-3 contentColor"
                    >
                      Register
                    </button>
                    <img
                      alt="symbol"
                      className="contentColor"
                      style={{ width: "20px", height: "45px" }}
                      src={symbolActive}
                    ></img>
                    <button
                      type="button"
                      onClick={prevToInformasiLembaga}
                      className="pr-3 pl-3 contentColor"
                    >
                      Informasi Lembaga
                    </button>
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
                  , dimohon untuk mengisi informasi dengan data terbaru milik
                  Lembaga Pelatihan anda.
                </p>

                <div
                  style={{ textAlign: "left" }}
                  className="col-md-5 mx-auto d-flex flex-column"
                >
                  <div className="pt-4 pb-3">
                    <label className="m-0">Nomor NPWP</label>
                    <input
                      type="text"
                      {...register("nomorNpwp", { required: { value: true } })}
                    ></input>
                  </div>
                  <div className="pb-3">
                    <label className="m-0">Scan NPWP</label>
                    <div className="buttonFile">
                      <label
                        htmlFor="file-upload"
                        className="buttonDesign m-0 p-1"
                      >
                        <span className="buttonText">Pilih File</span>
                      </label>
                      <input
                        {...register("file2", { required: { value: true } })}
                        style={{ display: "none" }}
                        id="file-upload"
                        type="file"
                        onChange={(event) => handleChange2(event)}
                      ></input>
                      <span
                        className="pl-3"
                        style={
                          isFilePicked2
                            ? { color: "black" }
                            : { color: "#CACACA" }
                        }
                      >
                        {isFilePicked2
                          ? fileName2
                          : " Belum ada file yang dipilih"}
                      </span>
                    </div>
                  </div>
                  <div className="pb-3">
                    <label className="m-0">Status pajak</label>
                    <select
                      {...register("statusPajak", {
                        required: { value: true },
                      })}
                      style={
                        isSetValueStatusPajak
                          ? { color: "black" }
                          : { color: "#CACACA" }
                      }
                      id="Status pajak"
                      onChange={setValueStatusPajakHandler}
                      // defaultValue=""
                    >
                      <option value=""></option>
                      <option value="volvo">Volvo</option>
                    </select>
                  </div>
                  <div className="pb-3">
                    <label className="m-0">Nomor rekening</label>
                    <input
                      type="text"
                      {...register("nomorRekening", {
                        required: { value: true },
                      })}
                    ></input>
                  </div>
                  <div className="pb-3">
                    <label className="m-0">Nama rekening</label>
                    <input
                      type="text"
                      {...register("namaRekening", {
                        required: { value: true },
                      })}
                    ></input>
                  </div>
                  <div className="pb-3">
                    <label className="m-0">Nama bank</label>
                    <select
                      {...register("namaBank", { required: { value: true } })}
                      style={
                        isSetValueBank
                          ? { color: "black" }
                          : { color: "#CACACA" }
                      }
                      id="Nama bank"
                      onChange={setValueBankHandler}
                      // defaultValue=""
                    >
                      <option value="">Bank Central Asia (BCA)</option>
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
                    <input
                      {...register("emailTimKeuangan", {
                        required: { value: true },
                      })}
                      type="text"
                      placeholder="john.doe@company.com"
                    ></input>
                  </div>
                  <div className="pt-2"></div>
                  <div className="">
                    <input
                      type="checkbox"
                      {...register("check1", { required: { value: true } })}
                    ></input>
                    <label className="pl-2">
                      Informasi yang saya berikan adalah benar dan terpercaya
                    </label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      {...register("check2", { required: { value: true } })}
                    ></input>
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
                      Pastikan email sudah benar, dan email yang dicantumkan
                      sudah dapat menerima verifikasi
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
              </div>
            </div>
          </section>
        )}
        <div className="pb-5">{renderButton()}</div>
      </form>
    </div>
  );
};
export default RegisterAsEducator1;
