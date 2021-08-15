import React, { useEffect, useState } from "react";
import hero from "../../resources/images/Ellipse3.svg";
import "./Tentang.css";
import symbol from "./Group10.svg";
import icon from "../../resources/symbols/XMLID1386(active).svg";
import Navbar2 from "../../components/navbar/Navbar2";
import Footer from "../../components/footer/Footer";
import Partner from "../../components/slider/Partner";
import ProductService from "../../services/ProductService";
import AboutUsService from "../../services/AboutUsService";
import WhyService from "../../services/WhyService";
import WhatYouLookFor from "../../services/WhatYouLookFor";
import { Link } from "react-router-dom";

const Tentang = () => {
  const [products, setProducts] = useState([]);
  const [aboutUs, setAboutUs] = useState([]);
  const [why, setWhy] = useState([]);
  const [whatYouLookFor, setWhatYouLookFor] = useState([]);

  useEffect(() => {
    retrieveProducts();
    retrieveAboutUs();
    retrieveWhyWaktukita();
    retrieveWhatYouLookFor();
  }, []);

  const retrieveProducts = () => {
    ProductService.getAll()
      .then((response) => {
        setProducts(response.data.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const retrieveAboutUs = () => {
    AboutUsService.getAll()
      .then((response) => {
        setAboutUs(response.data.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const retrieveWhatYouLookFor = () => {
    WhatYouLookFor.getAll()
      .then((response) => {
        setWhatYouLookFor(response.data.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const retrieveWhyWaktukita = () => {
    WhyService.getAll()
      .then((response) => {
        setWhy(response.data.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <Navbar2 />
      <section className="paddingWaktuKita">
        <div className="heroBox col-sm-12 p-0">
          <div className="d-flex justify-content-between">
            <div className="col-md-6 col-lg-7 col-xl-6 pl-5 row m-0 d-lg-flex flex-lg-column justify-content-lg-center">
              {aboutUs
                ? aboutUs.map((item) => {
                    return (
                      <div className="textHero d-md-flex flex-md-column justify-content-md-end">
                        <h2
                          style={{
                            fontFamily: "Montserrat, sans-serif",
                            fontWeight: "bold",
                            fontSize: "40px",
                          }}
                        >
                          {item.about_title}
                        </h2>
                        <p className="mr-5 pr-5 pb-mb-5">
                          {item.about_description}
                        </p>
                      </div>
                    );
                  })
                : null}
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

          <div className="d-flex flex-wrap justify-content-center col-md-10 text-left mx-auto">
            {why
              ? why.map((item) => {
                  return (
                    <div className="d-flex flex-column col-md-4 p-3">
                      <div className="d-flex heroDesc justify-content-start justify-content-md-center">
                        <img
                          className="align-self-start"
                          style={{ width: "40px" }}
                          alt={item.icon}
                          src={symbol}
                        ></img>
                        <div>
                          <h5 className="pl-3 heroNumber m-0 mt-2">
                            {item.why_title}
                          </h5>
                          <p
                            className="pl-3 p-0 truncate text-left"
                            style={{ opacity: "1" }}
                          >
                            {item.why_description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })
              : null}
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
        <div className="product ">
          {products.map((product, index) => {
            return (
              <div
                className={
                  (index + 1) % 2 === 0
                    ? "row justify-content-center m-0 flex-row-reverse"
                    : "row justify-content-center m-0"
                }
              >
                <img
                  key={product.id}
                  className="p-4 p-sm-5 col-md-7 col-xl-5 col-lg-6"
                  alt={product.product_photo}
                  src="https://i.ibb.co/rybnqLt/Mask-Group.png"
                ></img>
                <div
                  className={
                    (index + 1) % 2 === 0
                      ? "px-5 col-md-5 d-flex flex-column justify-content-center align-items-end"
                      : "px-5 col-md-5 d-flex flex-column justify-content-center align-items-start"
                  }
                >
                  <h3 style={{ textAlign: "left" }} className="heroNumber">
                    {product.product_title}
                  </h3>
                  <p style={{ textAlign: "left" }}>
                    {product.product_description}
                  </p>
                  <div>
                    <Link
                      to={product.product_link}
                      className="mr-auto d-flex justify-content-center Primary formButton"
                    >
                      {product.product_title_button}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section>
        {whatYouLookFor
          ? whatYouLookFor.map((item) => {
              return (
                <div className="row justify-content-center waktukita m-0">
                  <div className="p-4 pl-lg-5 col-md-5 col-lg-6 col-xl-5 pr-xl-0 my-auto">
                    <h2 style={{ textAlign: "left" }} className="titleForm">
                      Jadi apa yang kamu cari?
                    </h2>
                    <p style={{ textAlign: "left" }}>{item.description}</p>
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
              );
            })
          : null}
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
