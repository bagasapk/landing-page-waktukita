import React, { useState } from "react";
import Navbar2 from "../../components/navbar/Navbar2";
import img from "./Rectangle 69.svg";
import dashboard from "./dashboard.svg";
import icon from "../../resources/symbols/XMLID1386(active).svg";
import icon1 from "../tentang/Group10.svg";
import icon2 from "./Group 113.svg";
import icon3 from "./Group 2753.svg";
import "./Beranda.css";
import Footer from "../../components/footer/Footer";
import Testimoni from "../../components/slider/Testimoni";

const Beranda = () => {
  const [index, setIndex] = useState(0);
  const [index3, setIndex3] = useState(0);
  const categories = [
    "Perangkat lunak",
    "Teknologi",
    "Desain",
    "Pengembangan diri",
    "Seni",
    "Marketing",
    "Teknik",
    "Pengembangan website",
  ];

  const slides = [img, img, img, img, img, img];
  const cards = [
    { status: "Online", harga: "2.400.000" },
    { status: "Online", harga: "2.400.000" },
    { status: "Course", harga: "Gratis" },
    { status: "Online", harga: "Gratis" },
  ];

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
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [slides.length, index]);

  const renderIcon = (cards) => {
    if (cards !== "Gratis") {
      return <img src={icon3} alt="discount"></img>;
    } else {
      return undefined;
    }
  };

  const renderButton = () => {
    if (index3 === categories.length - 1) {
      return undefined;
    } else {
      return (
        <div role="button" className="carousel-control-prev chevron2">
          <i
            onClick={() => {
              setIndex3(index3 + 1);
            }}
            class="bi bi-chevron-left chevron"
          ></i>
          <span className="sr-only"></span>
        </div>
      );
    }
  };

  const renderButton2 = () => {
    if (index3 === 0) {
      return undefined;
    } else {
      return (
        <div role="button" className="carousel-control-next chevron2">
          <i
            onClick={() => {
              setIndex3(index3 - 1);
            }}
            class="bi bi-chevron-right chevron"
          ></i>
          <span></span>
        </div>
      );
    }
  };
  const renderButton3 = () => {
    if (index3 === 0) {
      return undefined;
    } else {
      return (
        <div role="button" className="d-xl-none carousel-control-next chevron2">
          <i
            onClick={() => {
              setIndex3(index3 - 1);
            }}
            class="bi bi-chevron-right chevron"
          ></i>
          <span></span>
        </div>
      );
    }
  };

  const renderButton4 = () => {
    if (index3 === 2) {
      return undefined;
    } else {
      return (
        <div role="button" className="d-xl-none carousel-control-prev chevron2">
          <i
            onClick={() => {
              setIndex3(index3 + 1);
            }}
            class="bi bi-chevron-left chevron"
          ></i>
          <span></span>
        </div>
      );
    }
  };

  return (
    <div className="beranda">
      <Navbar2 />
      <div
        style={{ backgroundColor: "white" }}
        className="slideshowSlider   pt-3"
      >
        <div
          style={{ transform: `translate3d(${-index * 93.3}%, 0, 0)` }}
          className="d-none d-xl-block px-5 slider position-relative"
        >
          <div className="d-flex flex-nowrap">
            {slides.map((src, index) => (
              <div className="col-xl-12">
                <img
                  className="d-block w-100 img-fluid"
                  key={index}
                  alt="frame-1"
                  src={src}
                ></img>
              </div>
            ))}
          </div>
        </div>
        <div
          style={{ transform: `translate3d(${-index * 90.5}%, 0, 0)` }}
          className="d-none d-xl-none d-lg-block px-5 slider position-relative"
        >
          <div className="d-flex flex-nowrap">
            {slides.map((src, index) => (
              <div className="col-lg-12">
                <img
                  className="d-block w-100 img-fluid"
                  key={index}
                  alt="frame-1"
                  src={src}
                ></img>
              </div>
            ))}
          </div>
        </div>
        <div
          style={{ transform: `translate3d(${-index * 87.4}%, 0, 0)` }}
          className="d-none d-lg-none d-md-block px-5 slider position-relative"
        >
          <div className="d-flex flex-nowrap">
            {slides.map((src, index) => (
              <div className="col-md-12">
                <img
                  className="d-block w-100 img-fluid"
                  key={index}
                  alt="frame-1"
                  src={src}
                ></img>
              </div>
            ))}
          </div>
        </div>
        <div
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
          className="d-block d-md-none slider position-relative"
        >
          <div className="d-flex flex-nowrap">
            {slides.map((src, index) => (
              <div className="col-12 p-0">
                <img
                  className="d-block w-100 img-fluid"
                  key={index}
                  alt="frame-1"
                  src={src}
                ></img>
                <img
                  className="d-block w-100 img-fluid"
                  key={index}
                  alt="frame-1"
                  src={src}
                ></img>
              </div>
            ))}
          </div>
        </div>
        <div className="d-block berandaSlider">
          {slides.map((_, idx) => (
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
      <h4 className="titleForm d-block d-xl-none">Kategori</h4>
      <img
        className="d-block d-xl-none mx-auto symbolPosition"
        alt="symbol"
        style={{ width: "20px", height: "45px" }}
        src={icon}
      ></img>
      <div className="d-block d-md-none slideshowSlider">
        <div
          style={{ transform: `translate3d(${-index3 * 100}%, 0, 0)` }}
          className="d-block d-lg-none slider position-relative"
        >
          <div className="d-flex flex-nowrap">
            {categories.map((src, index) => (
              <div className="d-flex justify-content-center col-12 col-md-2 ml-md-5 px-md-2">
                <img
                  className="d-block col-2 col-md-6 img-fluid"
                  key={index}
                  alt="frame-1"
                  src={dashboard}
                ></img>
                <p className="align-self-center pt-3">{src}</p>
              </div>
            ))}
          </div>
        </div>
        {renderButton()}
        {renderButton2()}
      </div>
      <div className="d-none d-md-block slideshowSlider">
        <div
          style={{ transform: `translate3d(${-index3 * 89}%, 0, 0)` }}
          className="d-md-block d-lg-none slider position-relative"
        >
          <div className="ml-5 pl-5 d-flex flex-nowrap">
            {categories.map((src, index) => (
              <div className="d-flex justify-content-start col-12 col-md-4 px-md-0">
                <img
                  className="d-block col-2 col-md-3 img-fluid"
                  key={index}
                  alt="frame-1"
                  src={dashboard}
                ></img>
                <p className="align-self-center pt-3">{src}</p>
              </div>
            ))}
          </div>
        </div>
        {renderButton3()}
        {renderButton4()}
      </div>
      <div className="d-none d-lg-block d-xl-none slideshowSlider">
        <div
          style={{ transform: `translate3d(${-index3 * 71.2}%, 0, 0)` }}
          className="d-none d-lg-block d-xl-block slider position-relative"
        >
          <div className="d-flex flex-nowrap justify-content-xl-center pl-5 pl-xl-0">
            {categories.map((src, index) => (
              <div className="d-flex justify-content-center col-12 col-md-3 col-xl-1 p-xl-0 ml-xl-0 px-xl-0 mx-xl-4 px-lg-0">
                <img
                  className="d-block col-2 col-md-4 col-lg-3 col-xl-6  img-fluid"
                  key={index}
                  alt="frame-1"
                  src={dashboard}
                ></img>
                <p className="align-self-center pt-3">{src}</p>
              </div>
            ))}
          </div>
        </div>
        {renderButton3()}
        {renderButton4()}
      </div>
      <div className="d-none d-xl-block slideshowSlider">
          <div className="d-flex justify-content-xl-between mx-5">
            {categories.map((src, index) => (
              <div className="d-flex">
                <img
                  className="d-block img-fluid"
                  key={index}
                  alt="frame-1"
                  src={dashboard}
                ></img>
                <span className="align-self-center pl-3">{src}</span>
              </div>
            ))}
        </div>
      </div>

      <div className="row m-0 px-5 pt-5 pb-3 justify-content-between">
        <h2 className="titleForm text-left ">Kelas dalam Waktu dekat</h2>
        <p className="align-self-center">
          Lihat semua <i className="bi bi-chevron-right"></i>
        </p>
      </div>
      <div className="row mx-4 mx-md-5">
        {cards.map((cards) => (
          <div className="px-0 px-md-3 col-md-6 col-lg-3">
            <div class="card  p-0 berandaCardFull">
              <div className="d-flex">
                <img
                  class="card-img-top"
                  src="https://i.ibb.co/rybnqLt/Mask-Group.png"
                  alt="Card cap"
                />
                <div className="position-absolute p-3">
                  <p className="p-1 px-4 status">{cards.status}</p>
                </div>
              </div>
              <div class="card-body">
                <h5 class="card-title text-uppercase text-left">
                  Become a wordpress developer
                </h5>
                {/* <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p> */}
                <div className="berandaCard">
                  <div className="py-1 d-flex text-left">
                    <img alt="message" src={icon1}></img>
                    <span className="pl-3 align-self-center">
                      3 Maret - 2 Juni 2021
                    </span>
                  </div>
                  <div className="py-1 d-flex">
                    <img alt="message" src={icon2}></img>
                    <div className="pl-3 row text-left">
                      <span className="pl-3 align-self-center">John Doe</span>
                      <span
                        style={{ fontSize: "14px", opacity: "0.5" }}
                        className="pl-3 align-self-center"
                      >
                        Wordpress Developer at Kompas TV
                      </span>
                    </div>
                  </div>
                  <div className="d-flex justify-content-xl-end justify-content-lg-center justify-content-md-end justify-content-end">
                    <span
                      style={{ fontWeight: "700" }}
                      className="align-self-center"
                    >
                      {cards.harga}
                    </span>
                    {renderIcon(cards.harga)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="row m-0 px-5 pt-5 pb-3 justify-content-between">
        <h2 className="titleForm text-left ">Kelas Rekomendasi</h2>
        <p className="align-self-center">
          Lihat semua <i className="bi bi-chevron-right"></i>
        </p>
      </div>
      <div className="row mx-4 mx-md-5">
        {cards.map((cards) => (
          <div className="px-0 px-md-3 col-md-6 col-lg-3">
            <div class="card  p-0 berandaCardFull">
              <div className="d-flex">
                <img
                  class="card-img-top"
                  src="https://i.ibb.co/rybnqLt/Mask-Group.png"
                  alt="Card cap"
                />
                <div className="position-absolute p-3">
                  <p className="p-1 px-4 status">{cards.status}</p>
                </div>
              </div>
              <div class="card-body">
                <h5 class="card-title text-uppercase text-left">
                  Become a wordpress developer
                </h5>
                {/* <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p> */}
                <div className="berandaCard">
                  <div className="py-1 d-flex text-left">
                    <img alt="message" src={icon1}></img>
                    <span className="pl-3 align-self-center">
                      3 Maret - 2 Juni 2021
                    </span>
                  </div>
                  <div className="py-1 d-flex">
                    <img alt="message" src={icon2}></img>
                    <div className="pl-3 row text-left">
                      <span className="pl-3 align-self-center">John Doe</span>
                      <span
                        style={{ fontSize: "14px", opacity: "0.5" }}
                        className="pl-3 align-self-center"
                      >
                        Wordpress Developer at Kompas TV
                      </span>
                    </div>
                  </div>
                  <div className="d-flex justify-content-xl-end justify-content-lg-center justify-content-md-end justify-content-end">
                    <span
                      style={{ fontWeight: "700" }}
                      className="align-self-center"
                    >
                      {cards.harga}
                    </span>
                    {renderIcon(cards.harga)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="row m-0 px-5 pt-5 pb-3 justify-content-between">
        <h2 className="titleForm text-left ">Kelas Favorit</h2>
        <p className="align-self-center">
          Lihat semua <i className="bi bi-chevron-right"></i>
        </p>
      </div>
      <div className="row mx-4 mx-md-5">
        {cards.map((cards) => (
          <div className="px-0 px-md-3 col-md-6 col-lg-3">
            <div class="card  p-0 berandaCardFull">
              <div className="d-flex">
                <img
                  class="card-img-top"
                  src="https://i.ibb.co/rybnqLt/Mask-Group.png"
                  alt="Card cap"
                />
                <div className="position-absolute p-3">
                  <p className="p-1 px-4 status">{cards.status}</p>
                </div>
              </div>
              <div class="card-body">
                <h5 class="card-title text-uppercase text-left">
                  Become a wordpress developer
                </h5>
                {/* <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p> */}
                <div className="berandaCard">
                  <div className="py-1 d-flex text-left">
                    <img alt="message" src={icon1}></img>
                    <span className="pl-3 align-self-center">
                      3 Maret - 2 Juni 2021
                    </span>
                  </div>
                  <div className="py-1 d-flex">
                    <img alt="message" src={icon2}></img>
                    <div className="pl-3 row text-left">
                      <span className="pl-3 align-self-center">John Doe</span>
                      <span
                        style={{ fontSize: "14px", opacity: "0.5" }}
                        className="pl-3 align-self-center"
                      >
                        Wordpress Developer at Kompas TV
                      </span>
                    </div>
                  </div>
                  <div className="d-flex justify-content-xl-end justify-content-lg-center justify-content-md-end justify-content-end">
                    <span
                      style={{ fontWeight: "700" }}
                      className="align-self-center"
                    >
                      {cards.harga}
                    </span>
                    {renderIcon(cards.harga)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Testimoni />
      <h2 className="pt-5 m-0 titleForm">Artikel</h2>
      <img
        className="mx-auto symbolPosition"
        alt="symbol"
        style={{ width: "20px", height: "45px" }}
        src={icon}
      ></img>
      <div className="col-md-12 p-3 p-md-5 d-flex flex-md-row flex-column justify-content-center">
        <div className="col-md-6 col-xl-6 col-lg-6 px-3 px-md-0 pr-md-0 d-flex flex-md-row flex-column justify-content-center">
          <div class="card col-12 col-md-5 p-0 berandaCardFull2 pt-5 pt-md-0 px-md-2">
            <img
              src="https://i.ibb.co/rybnqLt/Mask-Group.png"
              class="d-block w-100"
              alt="Artikel1"
            />
            <div class="card-body artikel text-left p-0 pl-3 pl-md-0 ">
              <p className="py-2 m-0">12 April 2021</p>
              <h5 class="">Lorem Ipsum</h5>
              <span class="card-text truncate">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. A nulla
                vitae varius tortor id imperdiet.
              </span>
            </div>
          </div>
          <div class="card col-12 col-md-5 p-0 berandaCardFull2 pt-5 pt-md-0 px-md-2 mx-md-2 ">
            <img
              src="https://i.ibb.co/rybnqLt/Mask-Group.png"
              class="d-block w-100"
              alt="Artikel1"
            />
            <div class="card-body artikel text-left p-0 pl-3 pl-md-0 ">
              <p className="py-2 m-0">12 April 2021</p>
              <h5 class="">Lorem Ipsum</h5>
              <span class="card-text truncate">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. A nulla
                vitae varius tortor id imperdiet.
              </span>
            </div>
          </div>
        </div>
        <div className="row col-12 col-md-6 col-lg-6 col-xl-6 px-0 mx-auto mx-md-0 px-md-3">
          <div className="d-flex col-md-6 col-lg-12 flex-lg-row flex-column py-5 py-md-0 pb-lg-2 justify-content-lg-center">
            <div className="align-self-start">
              <img
                src="https://i.ibb.co/rybnqLt/Mask-Group.png"
                class="d-block w-100"
                alt="Artikel1"
              />
            </div>
            <div class="d-flex flex-column col-md-12 px-md-0 px-lg-2 col-lg-6 col-xl-8 py-md-0 py-lg-0 py-xl-3 artikel text-left">
              <p className="py-2 m-0">12 April 2021</p>
              <h5>Lorem Ipsum</h5>
              <span className="truncate">
                Lorem ispansum dolor sit amet, consectetur adipiscing elit. A
                nulla vitae varius tortor id imperdiet.
              </span>
            </div>
          </div>
          <div className="d-flex col-md-6 col-lg-12 flex-lg-row flex-column pt-lg-2 justify-content-lg-center">
            <div className="align-self-start">
              <img
                src="https://i.ibb.co/rybnqLt/Mask-Group.png"
                class="d-block w-100"
                alt="Artikel1"
              />
            </div>
            <div class="d-flex flex-column col-md-12 px-md-0 px-lg-2 col-lg-6 col-xl-8 py-md-0 py-lg-0 py-xl-3 artikel text-left">
              <p className="py-2 m-0">12 April 2021</p>
              <h5>Lorem Ipsum</h5>
              <span className="truncate">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. A nulla
                vitae varius tortor id imperdiet.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-5 d-flex justify-content-center">
        <button className="col-6 col-md-3 p-3 d-flex justify-content-center navButton Secondary">
          <span className="textButton">Artikel lainnya</span>
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Beranda;
