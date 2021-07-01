import React, { useState } from "react";
import NavbarBeranda from "./navbar/NavbarBeranda";
import img from "./Rectangle 69.svg";
import dashboard from "./dashboard.svg";
import icon from "../../resources/symbols/XMLID1386(active).svg";
import icon1 from "../tentang/Group10.svg";
import icon2 from "./Group 113.svg";
import icon3 from "./Group 2753.svg";
import "./Beranda.css";
import logo from "../../resources/images/Vector.svg";
import contact1 from "../../resources/contact/Group 56.svg";
import contact2 from "../../resources/contact/Group 55.svg";
import contact3 from "../../resources/contact/Group 54.svg";
import contact4 from "../../resources/contact/Group 50.svg";
import location from "../../resources/symbols/Group10.svg";

const Beranda = () => {
  const [index, setIndex] = useState(0);
  const [index2, setIndex2] = useState(0);
  const timeoutRef2 = React.useRef(null);
  const tests = ["John Doe", "John Cena"];

  function resetTimeout2() {
    if (timeoutRef2.current) {
      clearTimeout(timeoutRef2.current);
    }
  }

  React.useEffect(() => {
    resetTimeout2();
    timeoutRef2.current = setTimeout(
      () =>
        setIndex2((prevIndex) =>
          prevIndex === tests.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout2();
    };
  }, [tests.length, index2]);

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
  // const slides = [img, img, img, img, img, img];
  // const [index, setIndex] = React.useState(0);
  // const timeoutRef = React.useRef(null);
  // const delay = 400000;

  // // function resetTimeout() {
  // //   if (timeoutRef.current) {
  // //     clearTimeout(timeoutRef.current);
  // //   }
  // // }

  // // React.useEffect(() => {
  // //   resetTimeout();
  // //   timeoutRef.current = setTimeout(
  // //     () =>
  // //       setIndex((prevIndex) =>
  // //         prevIndex === slides.length - 1 ? 0 : prevIndex + 1
  // //       ),
  // //     delay
  // //   );

  // //   return () => {
  // //     resetTimeout();
  // //   };
  // // }, [slides.length, index]);

  return (
    <div className="beranda">
      <NavbarBeranda />
      <div className="slideshowSlider">
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
      <div className="d-flex flex-md-row flex-column text-left mx-auto mx-md-0 flex-md-wrap justify-content-lg-between justify-content-md-start px-5">
        <div className="px-0">
          <img src={dashboard} alt="grid"></img>
          <span className="pl-2">Perangkat lunak</span>
        </div>
        <div className="px-0">
          <img src={dashboard} alt="grid"></img>
          <span className="pl-2">Teknologi</span>
        </div>
        <div className="px-0">
          <img src={dashboard} alt="grid"></img>
          <span className="pl-2">Desain</span>
        </div>
        <div className="px-0">
          <img src={dashboard} alt="grid"></img>
          <span className="pl-2">Pengembangan diri</span>
        </div>
        <div className="px-0">
          <img src={dashboard} alt="grid"></img>
          <span className="pl-2">Seni</span>
        </div>
        <div className="px-0">
          <img src={dashboard} alt="grid"></img>
          <span className="pl-2">Marketing</span>
        </div>
        <div className="px-0">
          <img src={dashboard} alt="grid"></img>
          <span className="pl-2">Teknik</span>
        </div>
        <div className="px-0">
          <img src={dashboard} alt="grid"></img>
          <span className="pl-2">Pengembangan website</span>
        </div>
      </div>
      `
      <div className="row px-5 pt-5 pb-3 justify-content-between">
        <h2 className="titleForm text-left ">Kelas dalam Waktu dekat</h2>
        <p className="align-self-center">
          Lihat semua <i className="bi bi-chevron-right"></i>
        </p>
      </div>
      <div className="row mx-5">
        {cards.map((cards) => (
          <div className="px-3 col-md-6 col-lg-3">
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
                  <div className="d-flex justify-content-xl-end justify-content-lg-center justify-content-md-end">
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
      <div className="row px-5 pt-5 pb-3 justify-content-between">
        <h2 className="titleForm text-left ">Kelas Rekomendasi</h2>
        <p className="align-self-center">
          Lihat semua <i className="bi bi-chevron-right"></i>
        </p>
      </div>
      <div className="row mx-5">
        {cards.map((cards) => (
          <div className="px-3 col-md-6 col-lg-3">
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
                  <div className="d-flex justify-content-xl-end justify-content-lg-center justify-content-md-end">
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
      <div className="row px-5 pt-5 pb-3 justify-content-between">
        <h2 className="titleForm text-left ">Kelas Favorit</h2>
        <p className="align-self-center">
          Lihat semua <i className="bi bi-chevron-right"></i>
        </p>
      </div>
      <div className="row mx-5">
        {cards.map((cards) => (
          <div className="px-3 col-md-6 col-lg-3">
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
                  <div className="d-flex justify-content-xl-end justify-content-lg-center justify-content-md-end">
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
      <div className="d-none d-md-block slideshowSlider">
        <div
          style={{ transform: `translate3d(${-index2 * 100}%, 0, 0)` }}
          className="px-5 slider position-relative"
        >
          <div className="d-flex">
            {tests.map((name, index) => (
              <div className="col-12 col-md-12 d-flex flex-md-row flex-column justify-content-md-center p-5 mx-5">
                <div className="col-12 col-md-6">
                  <img
                    key={index}
                    className="img-fluid"
                    alt="picture1"
                    src="https://i.ibb.co/592WbhN/Rectangle-72.png"
                  ></img>
                </div>
                <div className="text-left testimoni col-md-8 col-lg-6 text-center text-lg-left">
                  <h2 className="titleForm">{name}</h2>
                  <span>Designer</span>
                  <p className="pt-2 text-lg-left pt-lg-5">
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Facilisis accumsan eget habitant diam enim quam. Tincidunt
                    tellus tellus in morbi ut condimentum vivamus varius. Tortor
                    orci blandit lacus, sed purus tincidunt eget neque sapien.
                    Mi elit tortor amet enim, purus molestie erat. Id
                    scelerisque elit, rutrum duis aliquet placerat tincidunt.
                    Vitae quis sagittis est dignissim nibh commodo.”
                  </p>
                  <div className="starColor">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="d-md-none d-block slideshowSlider">
        <div
          style={{ transform: `translate3d(${-index2 * 100}%, 0, 0)` }}
          className="slider position-relative"
        >
          <div className="d-flex">
            {tests.map((name, index) => (
              <div className="col-12">
                <div className="col-12 col-md-6">
                  <img
                    key={index}
                    className="img-fluid"
                    alt="picture1"
                    src="https://i.ibb.co/592WbhN/Rectangle-72.png"
                  ></img>
                </div>
                <div className="text-left testimoni col-md-8 col-lg-6 text-center text-lg-left">
                  <h2 className="pt-3 pt-md-0 titleForm">{name}</h2>
                  <span>Designer</span>
                  <p className="pt-2 text-lg-left pt-lg-5">
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Facilisis accumsan eget habitant diam enim quam. Tincidunt
                    tellus tellus in morbi ut condimentum vivamus varius. Tortor
                    orci blandit lacus, sed purus tincidunt eget neque sapien.
                    Mi elit tortor amet enim, purus molestie erat. Id
                    scelerisque elit, rutrum duis aliquet placerat tincidunt.
                    Vitae quis sagittis est dignissim nibh commodo.”
                  </p>
                  <div className="starColor">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <h2 className="pt-5 m-0 titleForm">Artikel</h2>
      <img
        className="mx-auto symbolPosition"
        alt="symbol"
        style={{ width: "20px", height: "45px" }}
        src={icon}
      ></img>
      <div className="col-md-12 p-3 p-md-5 d-flex flex-md-row flex-column justify-content-center">
        <div className="col-md-6 col-xl-6 col-lg-4 d-flex justify-content-around">
          <div class="card col-5 p-0 berandaCardFull2">
            <img
              src="https://i.ibb.co/rybnqLt/Mask-Group.png"
              class=""
              alt="Artikel1"
            />
            <div class="card-body artikel text-left p-0 ">
              <p className="py-2 m-0">12 April 2021</p>
              <h5 class="card-title">Lorem Ipsum</h5>
              <span class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. A nulla
                vitae varius tortor id imperdiet.
              </span>
            </div>
          </div>
          <div class="card col-5 p-0 berandaCardFull2 ">
            <img
              src="https://i.ibb.co/rybnqLt/Mask-Group.png"
              class=""
              alt="Artikel1"
            />
            <div class="card-body artikel text-left p-0 ">
              <p className="py-2 m-0">12 April 2021</p>
              <h5 class="card-title">Lorem Ipsum</h5>
              <span class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. A nulla
                vitae varius tortor id imperdiet.
              </span>
            </div>
          </div>
        </div>
        <div className="row col-12 col-md-6 col-lg-8 col-xl-6">
          <div className="d-flex col-md-6 col-lg-12 flex-lg-row flex-column py-5 py-md-0 pb-lg-2 justify-content-lg-center">
            <div className="align-self-start">
              <img
                src="https://i.ibb.co/rybnqLt/Mask-Group.png"
                class="d-block w-100"
                alt="Artikel1"
              />
            </div>
            <div class="d-flex flex-column col-md-12 px-md-0 px-lg-2 col-lg-8 py-md-0 py-lg-3 artikel text-left">
              <p className="py-2 m-0">12 April 2021</p>
              <h5>Lorem Ipsum</h5>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. A nulla
                vitae varius tortor id imperdiet.
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
            <div class="d-flex flex-column col-md-12 px-md-0 px-lg-2 col-lg-8 py-md-0 py-lg-3 artikel text-left">
              <p className="py-2 m-0">12 April 2021</p>
              <h5>Lorem Ipsum</h5>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. A nulla
                vitae varius tortor id imperdiet.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-5 d-flex justify-content-center">
        <button className="col-6 col-md-2 p-3 d-flex justify-content-center navButton Primary">
          <span className="textButton">Artikel lainnya</span>
        </button>
      </div>
      <div className="footer row d-md-flex justify-content-between m-0">
        <div className="pl-md-5 pt-5 col-md-4 col-lg-3 d-md-flex flex-column justify-content-between p-0">
          <div>
            <img alt="logo" src={logo}></img>
          </div>
          <div className="pt-4 pt-md-0 pl-lg-3 text-md-left text-center text-xl-center pl-xl-0">
            <h6>Contact Us</h6>
            <div>
              <img alt="messages" src={contact1}></img>
              <img alt="phone" src={contact2}></img>
              <img alt="linkedin" src={contact3}></img>
              <img alt="instagram" src={contact4}></img>
            </div>
          </div>
        </div>
        <div className="pt-md-5 mt-md-5 d-lg-flex col-md-4 col-lg-5 justify-content-around justify-md-content-around p-0">
          <div className="d-md-flex flex-md-column justify-md-content-between">
            <div className="text-lg-left">
              <h6 className="pb-1 pt-5">Contact Us</h6>
              <p>Beranda</p>
              <p>Kategori</p>
              <p>Artikel</p>
              <p>Tentang</p>
              <p>Kontak</p>
            </div>
          </div>
          <div className="d-md-flex h-md-100 flex-md-column justify-md-content-between">
            <div className="text-lg-left">
              <h6 className="pb-1 pt-3 pt-md-5">Join Us</h6>
              <p>Join as Student</p>
              <p>Join as Educator</p>
            </div>
          </div>
          <div className="d-md-flex h-md-100 flex-md-column justify-md-content-between">
            <div className="text-lg-left">
              <h6 className="pb-1 pt-3 pt-md-5">More</h6>
              <p>FAQ</p>
              <p>Privacy Policy</p>
              <p>Terms & Condition</p>
            </div>
          </div>
        </div>
        <div className="pt-4 pt-md-5 col-md-4 d-flex flex-column justify-content-around">
          <div className="pt-md-5 d-md-flex">
            <img alt="loc" src={location}></img>
            <div className="col-md-9 pt-2 pt-md-0 text-md-left">
              <h6>Yogyakarta</h6>
              <p>
                Innovation Factory Block 71 Yogyakarta Jl. Prof. Dr. Herman
                Yohanes No. 1212, Terban, Gondokusuman, Yogyakarta, 552233
              </p>
            </div>
          </div>
          <div className="d-md-flex">
            <img alt="loc" src={location}></img>
            <div className="col-md-9 pt-2 pt-md-0 text-md-left">
              <h6>Jakarta</h6>
              <p>
                Innovation Factory Block 71 Jakarta Ariobimo Sentral, South
                Jakarta, RT.9/RW.4, East Kuningan, Jakarta, 12950
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pr-md-5 pl-md-5 pb-1 pt-3 footer">
        <div className="pr-5 pl-5 pt-1">
          <div className="border-top pr-5 pl-5 pt-1">
            <p>Copyright © 2021 Waktukita.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beranda;
