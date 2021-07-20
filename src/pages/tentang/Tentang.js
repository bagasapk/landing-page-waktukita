import React from "react";
import hero from "../../resources/images/Ellipse3.svg";
import "./Tentang.css";
import symbol from "./Group10.svg";
import icon from "../../resources/symbols/XMLID1386(active).svg";
import Navbar2 from "../../components/navbar/Navbar2";
import Footer from "../../components/footer/Footer";
import Partner from "../../components/slider/Partner";

const Tentang = () => {
  return (
    <div>
      <Navbar2 />
      <section>
        <div className="heroBox col-sm-12 p-0">
          <div className="d-flex justify-content-between">
            <div className="col-md-6 col-lg-7 col-xl-6 pl-5 pl-md-0 pl-lg-5 row m-0 d-lg-flex flex-lg-column justify-content-lg-center">
              <div className="textHero d-md-flex flex-md-column justify-content-md-end">
                <h2
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: "bold",
                    fontSize: "40px",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum
                  cursus dictum duis.
                </h2>
                <p className="mr-5 pr-5 pb-mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque commodo pellentesque amet, pellentesque. Leo in sapien
                  nisi, fusce libero ultrices. Neque sed gravida feugiat
                  pharetra. Tristique leo quisque aliquet bibendum faucibus
                  morbi. Enim sapien neque nec risus sodales in.
                </p>
              </div>
              <div className="d-flex justify-content-md-between flex-wrap mr-xl-5 pr-5 m-0">
                <div className="d-flex heroDesc pb-3 pb-mb-0 align-items-md-start align-items-center pr-1">
                  <img alt="symbol" src={symbol}></img>
                  <div className="pb-2 pl-3 d-flex flex-column justify-content-center">
                    <h3 className=" heroNumber m-0 mt-2">20</h3>
                    <p className="">Kelas</p>
                  </div>
                </div>
                <div className="d-flex heroDesc pb-3 pb-mb-0 align-items-md-start align-items-center pr-1">
                  <img alt="symbol" src={symbol}></img>
                  <div className="pl-3 d-flex flex-column justify-content-center">
                    <h3 className=" heroNumber m-0 mt-2">32</h3>
                    <p className="">Mentor</p>
                  </div>
                </div>
                <div className="d-flex heroDesc pb-3 pb-mb-0 align-items-md-start align-items-center pr-1">
                  <img alt="symbol" src={symbol}></img>
                  <div className="pl-3 d-flex flex-column justify-content-center">
                    <h3 className=" heroNumber m-0 mt-2">500+</h3>
                    <p className="">Talent</p>
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
            <h2 className="titleForm">Kenapa memilih Waktukita?</h2>
            <img
              className="mx-auto symbolPosition"
              alt="symbol"
              style={{ width: "20px", height: "45px" }}
              src={icon}
            ></img>
          </div>
          <div className="d-flex flex-wrap justify-content-center col-md-10 mx-auto">
            <div className="d-flex flex-column col-md-4 p-3">
              <div className="d-flex col-md-9 heroDesc">
                <img style={{ width: "40px" }} alt="symbol" src={symbol}></img>
                <h5 className="pl-3 heroNumber m-0 mt-2">Lorem Ipsum</h5>
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
              <div className="d-flex col-md-9 heroDesc">
                <img style={{ width: "40px" }} alt="symbol" src={symbol}></img>
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
            <div className="d-flex flex-column col-md-4 p-3">
              <div className="d-flex col-md-9 heroDesc">
                <img style={{ width: "40px" }} alt="symbol" src={symbol}></img>
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
            <div className="d-flex flex-column col-md-4 p-3">
              <div className="d-flex col-md-9 heroDesc">
                <img style={{ width: "40px" }} alt="symbol" src={symbol}></img>
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
            <div className="d-flex flex-column col-md-4 p-3">
              <div className="d-flex col-md-9 heroDesc">
                <img style={{ width: "40px" }} alt="symbol" src={symbol}></img>
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
        <div
          className="pr-5 pl-5 pt-5 d-flex flex-column justify-content-center"
          style={{ textAlign: "center" }}
        >
          <h2 className="titleForm">Produk Waktukita</h2>
          <img
            className="mx-auto symbolPosition"
            alt="symbol"
            style={{ width: "20px", height: "45px" }}
            src={icon}
          ></img>
        </div>
        <div className="row justify-content-center m-0">
          <img
            className="p-4 p-sm-5 col-md-7 col-xl-5 col-lg-6"
            alt="classes"
            src="https://i.ibb.co/rybnqLt/Mask-Group.png"
          ></img>
          <div className="px-4 col-md-5 d-flex flex-column justify-content-center">
            <h3 style={{ textAlign: "left" }} className="heroNumber">
              Classes
            </h3>
            <p style={{ textAlign: "left" }}>
              Get ahead with expert-led training in digital and technology based
              materials. Join our class of design, coding, digital marketing,
              and more — on board and online
            </p>
            <div>
              <button className="col-md-7 mr-auto d-flex justify-content-center Primary formButton">
                Pick a class
              </button>
            </div>
          </div>
        </div>
        <div className="flex-md-row d-flex flex-column-reverse justify-content-center m-0">
          <div className="px-5 col-md-5 d-flex flex-column justify-content-center">
            <h3 style={{ textAlign: "right" }} className="heroNumber">
              Assessed | Talent Solution
            </h3>
            <p style={{ textAlign: "right" }}>
              Transform your workforce and forget the complexity of hiring and
              employer training with our intensive training, assessments, and an
              exclusive hiring pipeline
            </p>
            <div>
              <button className="col-md-8 ml-auto d-flex justify-content-center Primary formButton">
                Hunting now
              </button>
            </div>
          </div>
          <img
            className="p-4 col-md-7 col-xl-5 col-lg-6"
            alt="talent"
            src="https://i.ibb.co/NxMvH7G/Mask-Group-1.png"
          ></img>
        </div>
        <div className="row  justify-content-center m-0">
          <img
            className="p-4 col-md-7 col-xl-5 col-lg-6"
            alt="classes"
            src="https://i.ibb.co/rybnqLt/Mask-Group.png"
          ></img>
          <div className="px-4 col-md-5  d-flex flex-column justify-content-center">
            <h3 style={{ textAlign: "left" }} className="heroNumber">
              Personal Development
            </h3>
            <p style={{ textAlign: "left" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse euismod cras nisl eu adipiscing amet diam. Et pharetra
              molestie lectus dui cras faucibus. Sed diam neque.
            </p>
            <div>
              <button className="col-md-7 mr-auto d-flex justify-content-center Primary formButton">
                Pick a class
              </button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="row justify-content-center waktukita m-0">
          <div className="p-4 pl-lg-5 col-md-5 col-lg-6 col-xl-5 pr-xl-0 my-auto">
            <h2 style={{ textAlign: "left" }} className="titleForm">
              Jadi apa yang kamu cari?
            </h2>
            <p style={{ textAlign: "left" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor,
              eget etiam aliquam sed in a. Ridiculus interdum senectus sociis
              porttitor suspendisse amet. Tempor quis morbi.
            </p>
            <div className="d-flex col-md-12 col-lg-7 col-xl-8 p-0 justify-content-around justify-content-md-between">
              <div>
                <button
                  // style={{ width: "15vw" }}
                  className="d-flex justify-content-center navButton Primary px-xl-5"
                >
                  <span className="textButton">Student</span>
                </button>
              </div>
              <div>
                <button
                  // style={{ width: "15vw" }}
                  className="d-flex justify-content-center navButton Secondary px-xl-5"
                >
                  <span className="textButton">Educator</span>
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-5 col-xl-5">
            <img
              className="p-md-5 img-fluid "
              alt="none"
              src="https://i.ibb.co/JKW0BXY/Group-13.png"
            ></img>
          </div>
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

export default Tentang;
