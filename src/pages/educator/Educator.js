import React from "react";
import NavbarEducator from "../../components/navbar/NavbarEducator";
import symbol from "../tentang/Group10.svg";
import hero from "../../resources/images/Ellipse3.svg";
import icon from "../../resources/symbols/XMLID1386(active).svg";
import Testimoni from "../../components/slider/Testimoni";
import Partner from "../../components/slider/Partner";
import Footer from "../../components/footer/Footer";

const Educator = () => {
  return (
    <div>
      <NavbarEducator />
      <section className="paddingWaktuKita">
        <div className="heroBox col-sm-12 px-0">
          <div className="d-flex justify-content-between">
            <div className="col-md-6 col-lg-7 col-xl-6 pl-5 pl-md-5 pl-lg-5 row m-0 d-lg-flex flex-lg-column justify-content-lg-center">
              <div className="textHero d-md-flex flex-md-column justify-content-md-end">
                <h2
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: "bold",
                    fontSize: "40px",
                  }}
                >
                  Bergabung sebagai Educator
                </h2>
                <p className="mr-5 pr-5 pb-mb-5">
                  Buat dan kelola produk kelas Anda dalam satu platform. Rasakan
                  kemudahan dalam melakukan pemasaran, pengelolaan dan
                  penerimaan pembayaran dari setiap acara yang Anda buat sebagai
                  bentuk tranformasi dan implementasi teknologi seutuhnya.
                </p>
              </div>
              <div className="d-flex justify-content-md-between flex-wrap mr-xl-4 pr-0 m-0">
                <div className="d-flex heroDesc pb-3 pb-mb-0 align-items-md-start align-items-center pr-1">
                  <img alt="symbol" src={symbol}></img>
                  <div className="pb-2 pl-3 d-flex flex-column justify-content-center">
                    <h3 className="heroNumber m-0 mt-2">500+</h3>
                    <p className="">Educators</p>
                  </div>
                </div>
                <div className="d-flex heroDesc pb-3 pb-mb-0 align-items-md-start align-items-center pr-1">
                  <img alt="symbol" src={symbol}></img>
                  <div className="pl-3 d-flex flex-column justify-content-center">
                    <h3 className=" heroNumber m-0 mt-2">1000+</h3>
                    <p className="">Kelas tiap tahun</p>
                  </div>
                </div>
                <div className="d-flex heroDesc pb-3 pb-mb-0 align-items-md-start align-items-center pr-1">
                  <img alt="symbol" src={symbol}></img>
                  <div className="pl-3 d-flex flex-column justify-content-center">
                    <h3 className=" heroNumber m-0 mt-2">2000+</h3>
                    <p className="">Students</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-none d-sm-block hero">
              <img className="heroImg" alt="hero" src={hero}></img>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="p-5 d-flex flex-column waktukita justify-content-center">
          <div>
            <h2 className="titleForm">
              Terhubung dengan Student secara Online
            </h2>
            <img
              className="mx-auto symbolPosition"
              alt="symbol"
              style={{ width: "20px", height: "45px" }}
              src={icon}
            ></img>
          </div>
          <div className="d-flex flex-wrap justify-content-center col-md-10 mx-auto">
            <div className="d-flex flex-column col-md-4 p-3">
              <div className="d-flex col-xl-12 heroDesc">
                <img
                  className="align-self-start"
                  style={{ width: "40px" }}
                  alt="symbol"
                  src={symbol}
                ></img>
                <div>
                  <h5 className="pl-3 heroNumber m-0 mt-2">Perluas pasar</h5>
                  <p
                    className="text-center pl-3 pt-3 truncate text-md-left"
                    style={{ opacity: "1" }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod
                  </p>
                </div>
              </div>
            </div>
            <div className="d-flex flex-column col-md-4 p-3">
              <div className="d-flex col-xl-12 heroDesc">
                <img
                  className="align-self-start"
                  style={{ width: "40px" }}
                  alt="symbol"
                  src={symbol}
                ></img>
                <div className="pl-3">
                  <h5 className="heroNumber m-0 mt-2">Perbanyak peserta</h5>
                </div>
              </div>
              <p
                className="pl-md-4 ml-md-5 p-0 text-center truncate col-md-12 text-md-left"
                style={{ textAlign: "left" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod
              </p>
            </div>
            <div className="d-flex flex-column col-md-4 p-3">
              <div className="d-flex col-xl-12 heroDesc">
                <img
                  className="align-self-start"
                  style={{ width: "40px" }}
                  alt="symbol"
                  src={symbol}
                ></img>
                <div className="pl-3">
                  <h5 className="heroNumber m-0 mt-2">Lorem Ipsum</h5>
                </div>
              </div>
              <p
                className="pl-md-4 ml-md-5 p-0 text-center truncate col-md-12 text-md-left"
                style={{ textAlign: "left" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="p-5 d-flex flex-column justify-content-center">
          <div>
            <h2 className="titleForm">Syarat dan Ketentuan</h2>
            <img
              className="mx-auto symbolPosition"
              alt="symbol"
              style={{ width: "20px", height: "45px" }}
              src={icon}
            ></img>
          </div>
          <div className="d-flex flex-wrap justify-content-center col-md-10 mx-auto">
            <div className="d-flex flex-column col-md-4 p-3">
              <div className="d-flex col-xl-12 heroDesc">
                <img
                  className="align-self-start"
                  style={{ width: "40px" }}
                  alt="symbol"
                  src={symbol}
                ></img>
                <h5 className="pl-3 heroNumber m-0 mt-2">Lorem ipsum</h5>
              </div>
              <p
                className="pl-md-4 ml-md-5 p-0 text-center truncate col-md-12 text-md-left"
                style={{ textAlign: "left" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod
              </p>
            </div>
            <div className="d-flex flex-column col-md-4 p-3">
              <div className="d-flex col-xl-12 heroDesc">
                <img
                  className="align-self-start"
                  style={{ width: "40px" }}
                  alt="symbol"
                  src={symbol}
                ></img>
                <div className="pl-3">
                  <h5 className="heroNumber m-0 mt-2">Lorem ipsum</h5>
                </div>
              </div>
              <p
                className="pl-md-4 ml-md-5 p-0 text-center truncate col-md-12 text-md-left"
                style={{ textAlign: "left" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod
              </p>
            </div>
            <div className="d-flex flex-column col-md-4 p-3">
              <div className="d-flex col-xl-12 heroDesc">
                <img
                  className="align-self-start"
                  style={{ width: "40px" }}
                  alt="symbol"
                  src={symbol}
                ></img>
                <div className="pl-3">
                  <h5 className="heroNumber m-0 mt-2">Lorem Ipsum</h5>
                </div>
              </div>
              <p
                className="pl-md-4 ml-md-5 p-0 text-center truncate col-md-12 text-md-left"
                style={{ textAlign: "left" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="waktukita   ">
          <h2 className="titleForm">Kata mereka tentang Waktukita</h2>
          <img
            className="mx-auto symbolPosition"
            alt="symbol"
            style={{ width: "20px", height: "45px" }}
            src={icon}
          ></img>
          <Testimoni />
        </div>
      </section>

      <section>
        <div className="p-5">
          <h2 className="titleForm">Partner kami</h2>
          <img
            className="mx-auto symbolPosition"
            alt="symbol"
            style={{ width: "20px", height: "45px" }}
            src={icon}
          ></img>
        </div>
        <Partner />
      </section>
      <Footer />
    </div>
  );
};

export default Educator;
