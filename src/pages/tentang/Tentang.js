import React from "react";
import NavbarTentang from "./navbar/NavbarTentang";
import hero from "../../resources/images/Ellipse3.svg";
import "./Tentang.css";
import symbol from "./Group10.svg";
import icon from "../../resources/symbols/XMLID1386(active).svg";
import frame1 from "../../resources/brand/Rectangle 47.png";
import frame2 from "../../resources/brand/our-partner-3 1.png";
import frame3 from "../../resources/brand/our-partner-10.png";
import frame4 from "../../resources/brand/our-partner-5.png";
import frame5 from "../../resources/brand/our-partner-8.png";
import frame6 from "../../resources/brand/Group 64.png";
import frame7 from "../../resources/brand/our-partner-6.png";
import frame8 from "../../resources/brand/our-partner-9.png";
import frame9 from "../../resources/brand/our-partner-2 1.png";
import logo from "../../resources/images/Vector.svg";
import contact1 from "../../resources/contact/Group 56.svg";
import contact2 from "../../resources/contact/Group 55.svg";
import contact3 from "../../resources/contact/Group 54.svg";
import contact4 from "../../resources/contact/Group 50.svg";
import location from "../../resources/symbols/Group10.svg";

const Tentang = () => {
  const slides = [
    frame1,
    frame2,
    frame3,
    frame4,
    frame5,
    frame6,
    frame7,
    frame8,
    frame9,
  ];

  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);
  const delay = 4000;

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === slides.length - 7 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [slides.length, index]);

  return (
    <div>
      <NavbarTentang />
      <section>
        <div className="heroBox">
          <div className="d-flex justify-content-between">
            <div className="col-md-6 heroContainer">
              <div className="textHero">
                <h2
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: "bold",
                    fontSize: "46px",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum
                  cursus dictum duis.
                </h2>
                <p className="mr-5 pr-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque commodo pellentesque amet, pellentesque. Leo in sapien
                  nisi, fusce libero ultrices. Neque sed gravida feugiat
                  pharetra. Tristique leo quisque aliquet bibendum faucibus
                  morbi. Enim sapien neque nec risus sodales in.
                </p>
              </div>
              <div className="d-flex justify-content-between mr-5 pr-5">
                <div className="d-flex heroDesc">
                  <img alt="symbol" src={symbol}></img>
                  <div className="pl-3 d-flex flex-column justify-content-center">
                    <h3 className=" heroNumber m-0 mt-2">20</h3>
                    <p className="">Kelas</p>
                  </div>
                </div>
                <div className="d-flex heroDesc">
                  <img alt="symbol" src={symbol}></img>
                  <div className="pl-3 d-flex flex-column justify-content-center">
                    <h3 className=" heroNumber m-0 mt-2">32</h3>
                    <p className="">Mentor</p>
                  </div>
                </div>
                <div className="d-flex heroDesc">
                  <img alt="symbol" src={symbol}></img>
                  <div className="pl-3 d-flex flex-column justify-content-center">
                    <h3 className=" heroNumber m-0 mt-2">500+</h3>
                    <p className="">Talent</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero">
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
              <p className="pl-4 ml-5 col-md-12" style={{ textAlign: "left" }}>
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
              <p className="pl-4 ml-5 col-md-12" style={{ textAlign: "left" }}>
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
              <p className="pl-4 ml-5 col-md-12" style={{ textAlign: "left" }}>
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
              <p className="pl-4 ml-5 col-md-12" style={{ textAlign: "left" }}>
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
              <p className="pl-4 ml-5 col-md-12" style={{ textAlign: "left" }}>
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
        <div className="d-flex justify-content-center">
          <img
            className="p-5 col-md-5"
            alt="classes"
            src="https://i.ibb.co/rybnqLt/Mask-Group.png"
          ></img>
          <div className="p-5 col-md-5 d-flex flex-column justify-content-center">
            <h3 style={{ textAlign: "left" }} className="heroNumber">
              Classes
            </h3>
            <p style={{ textAlign: "left" }}>
              Get ahead with expert-led training in digital and technology based
              materials. Join our class of design, coding, digital marketing,
              and more — on board and online
            </p>
            <div>
              <button className="col-md-4 mr-auto d-flex justify-content-center Primary formButton">
                Pick a class
              </button>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="p-5 col-md-5 d-flex flex-column justify-content-center">
            <h3 style={{ textAlign: "right" }} className="heroNumber">
              Assessed | Talent Solution
            </h3>
            <p style={{ textAlign: "right" }}>
              Transform your workforce and forget the complexity of hiring and
              employer training with our intensive training, assessments, and an
              exclusive hiring pipeline
            </p>
            <div>
              <button className="col-md-4 ml-auto d-flex justify-content-center Primary formButton">
                Hunting now
              </button>
            </div>
          </div>
          <img
            className="p-5 col-md-5"
            alt="talent"
            src="https://i.ibb.co/NxMvH7G/Mask-Group-1.png"
          ></img>
        </div>
        <div className="d-flex justify-content-center">
          <img
            className="p-5 col-md-5"
            alt="classes"
            src="https://i.ibb.co/rybnqLt/Mask-Group.png"
          ></img>
          <div className="p-5 col-md-5 d-flex flex-column justify-content-center">
            <h3 style={{ textAlign: "left" }} className="heroNumber">
              Personal Development
            </h3>
            <p style={{ textAlign: "left" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse euismod cras nisl eu adipiscing amet diam. Et pharetra
              molestie lectus dui cras faucibus. Sed diam neque.
            </p>
            <div>
              <button className="col-md-4 mr-auto d-flex justify-content-center Primary formButton">
                Pick a class
              </button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="d-flex justify-content-center waktukita">
          <div className="p-4 col-md-6 my-auto">
            <h2 style={{ textAlign: "left" }} className="titleForm">
              Jadi apa yang kamu cari?
            </h2>
            <p style={{ textAlign: "left" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor,
              eget etiam aliquam sed in a. Ridiculus interdum senectus sociis
              porttitor suspendisse amet. Tempor quis morbi.
            </p>
            <div className="d-flex col-md-8 p-0 justify-content-between">
              <div>
                <button
                  style={{ width: "15vw" }}
                  className="d-flex justify-content-center navButton Primary"
                >
                  <span className="textButton">Student</span>
                </button>
              </div>
              <div>
                <button
                  style={{ width: "15vw" }}
                  className="d-flex justify-content-center navButton Secondary"
                >
                  <span className="textButton">Educator</span>
                </button>
              </div>
            </div>
          </div>
          <img
            className="p-4"
            alt="none"
            src="https://i.ibb.co/JKW0BXY/Group-13.png"
          ></img>
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

        <div className="pb-4 slideshowSlider">
          <div
            style={{ transform: `translate3d(${-index * 27}%, 0, 0)` }}
            className="p-5 d-flex flex-nowrap slider"
          >
            {slides.map((src, index) => (
              <img className="pl-5" key={index} alt="frame-1" src={src}></img>
            ))}
          </div>
          <div>
            {slides.slice(0, 3).map((_, idx) => (
              <div
                key={idx}
                className={`slideshowDots${index === idx ? " active" : ""}`}
                onClick={() => {
                  setIndex(idx);
                }}
              ></div>
            ))}
          </div>
        </div>
        <div className="footer d-flex justify-content-between">
          <div className="pl-5 pt-5 col-md-3 d-flex flex-column justify-content-between">
            <div>
              <img alt="logo" src={logo}></img>
            </div>
            <div className="pl-5 text-left">
              <h6>Contact Us</h6>
              <div>
                <img alt="messages" src={contact1}></img>
                <img alt="phone" src={contact2}></img>
                <img alt="linkedin" src={contact3}></img>
                <img alt="instagram" src={contact4}></img>
              </div>
            </div>
          </div>
          <div className="pt-5 mt-5 d-flex col-md-5 justify-content-around">
            <div className="d-flex h-100 flex-column justify-content-between">
              <div className="text-left">
                <h6 className="pb-1 pt-5">Contact Us</h6>
                <p>Beranda</p>
                <p>Kategori</p>
                <p>Artikel</p>
                <p>Tentang</p>
                <p>Kontak</p>
              </div>
            </div>
            <div className="d-flex h-100 flex-column justify-content-between">
              <div className="text-left">
                <h6 className="pb-1 pt-5">Join Us</h6>
                <p>Join as Student</p>
                <p>Join as Educator</p>
              </div>
            </div>
            <div className="d-flex h-100 flex-column justify-content-between">
              <div className="text-left">
                <h6 className="pb-1 pt-5">More</h6>
                <p>FAQ</p>
                <p>Privacy Policy</p>
                <p>Terms & Condition</p>
              </div>
            </div>
          </div>
          <div className="pt-5 d-flex flex-column justify-content-around">
            <div className="pt-5 d-flex">
              <img alt="loc" src={location}></img>
              <div className="col-md-9 text-left">
                <h6>Yogyakarta</h6>
                <p>
                  Innovation Factory Block 71 Yogyakarta Jl. Prof. Dr. Herman
                  Yohanes No. 1212, Terban, Gondokusuman, Yogyakarta, 552233
                </p>
              </div>
            </div>
            <div className="d-flex">
              <img alt="loc" src={location}></img>
              <div className="col-md-9 text-left">
                <h6>Jakarta</h6>
                <p>
                  Innovation Factory Block 71 Jakarta Ariobimo Sentral, South
                  Jakarta, RT.9/RW.4, East Kuningan, Jakarta, 12950
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="pr-5 pl-5 pb-1 pt-3 footer">
          <div className="pr-5 pl-5 pt-1">
            <div className="border-top pr-5 pl-5 pt-1">
              <p>Copyright © 2021 Waktukita.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tentang;
