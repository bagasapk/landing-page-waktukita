import React, { useState } from "react";
import Navbar2 from "../../components/navbar/Navbar2";
import symbol from "../../pages/tentang/Group10.svg";
import calendar from "../../resources/symbols/calendar_edit.svg";
import user from "../../resources/symbols/user.svg";
import waktu from "../../resources/symbols/Group 2699.svg";
import loc from "../../resources/symbols/Group 2698.svg";
import sertif from "../../resources/symbols/Group 2715.svg";
import materi from "../../resources/symbols/Group 2716.svg";
import user2 from "../../resources/symbols/Group 2717.svg";
import task from "../../resources/symbols/Group 2722.svg";
import discount from "../../resources/symbols/Group 2716 (1).svg";
import icon3 from "../beranda/Group 2753.svg";
import icon1 from "../tentang/Group10.svg";
import icon2 from "../beranda/Group 113.svg";
import { Collapse } from "react-bootstrap";
import Footer from "../../components/footer/Footer";

const RincianKelas = () => {
  const [open, setOpen] = useState(false);
  const renderRinciButton = () => {
    if (open) {
      return <i class="bi bi-dash-lg"></i>;
    } else {
      return <i class="bi bi-plus-lg"></i>;
    }
  };
  const cards = [
    { status: "Online", harga: "2.400.000" },
    { status: "Online", harga: "2.400.000" },
    { status: "Course", harga: "Gratis" },
    { status: "Online", harga: "Gratis" },
  ];
  const renderIcon = (cards) => {
    if (cards !== "Gratis") {
      return <img src={icon3} alt="discount"></img>;
    } else {
      return undefined;
    }
  };
  return (
    <div>
      <Navbar2 />
      <section>
        <div className="heroBox col-sm-12 px-sm-5">
          <div className="d-flex justify-content-between">
            <div className="col-md-6 col-lg-7 col-xl-6 pl-md-0 pl-lg-5 row m-0 d-lg-flex flex-lg-column justify-content-lg-center">
              <div className="textHero d-md-flex flex-md-column justify-content-md-end">
                <h5>Online</h5>
                <h2
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: "bold",
                    fontSize: "40px",
                  }}
                >
                  DIGITAL MARKETING
                </h2>
                <div className="p-2 m-0 row col-12 justify-content-around justify-content-lg-around justify-content-md-between detail2 align-content-center">
                  <p className="m-0 align-content-center">Pendaftaran</p>
                  <div className="row align-content-center">
                    <img alt="calendar" className="px-2" src={calendar}></img>
                    <span className="">27 Januari - 27 Februari 2021</span>
                  </div>
                  <div className="row align-content-center">
                    <img alt="user" className="px-2" src={user}></img>
                    <span className="">20 orang</span>
                  </div>
                </div>
                <p className="mr-md-5 pr-md-5 text-justify">
                  Waktukita’s Digital Marketing Immersive is a full-time career
                  accelerator that’s designed to transform students from novices
                  into job-ready digital marketers. As a graduate, you’ll leave
                  with a solid base of f undamental marketing knowledge, as well
                  as experience with tools, tactics, and strategies that local
                  employers demand. <a href="/">Lihat Selengkapnya</a>
                </p>
              </div>
              <div className="row justify-content-between pr-4 pr-md-5 m-0">
                <div className="pelaksanaan">
                  <h4 className="text-left pt-3 pt-xl-0">Pelaksanaan</h4>
                  <div className="d-flex">
                    <img
                      className="mr-3 mt-2"
                      alt="calendar"
                      src={symbol}
                    ></img>
                    <p className="align-self-center text-left m-0">
                      1 Maret - 3 Juni 2021
                    </p>
                  </div>
                  <div className="d-flex">
                    <img className="mr-3 mt-2" alt="waktu" src={waktu}></img>
                    <div className="align-self-center text-left">
                      <p className="m-0">Senin dan Kamis</p>
                      <p className="m-0">18:30 - 21:00 WIB</p>
                    </div>
                  </div>
                  <div className="d-flex">
                    <img className="mr-3 mt-2" alt="loc" src={loc}></img>
                    <p className="align-self-center text-left m-0">
                      1 Maret - 3 Juni 2021
                    </p>
                  </div>
                </div>
                <div className="pelaksanaan">
                  <h4 className="text-left pt-3 pt-xl-0">Mentor</h4>
                  <div className="d-flex mentor">
                    <img
                      className="mr-3 mt-2"
                      alt="calendar"
                      src="https://i.ibb.co/Q94YXWr/Ellipse-2.png"
                    ></img>
                    <div className="align-self-center text-left">
                      <p className="m-0">Lorem Ipsum</p>
                      <p className="m-0 mentorDesc">
                        Wordpress Developer at Kompas TV
                      </p>
                    </div>
                  </div>
                  <div className="d-flex mentor">
                    <img
                      className="mr-3 mt-2"
                      alt="calendar"
                      src="https://i.ibb.co/Q94YXWr/Ellipse-2.png"
                    ></img>
                    <div className="align-self-center text-left">
                      <p className="m-0">Lorem Ipsum</p>
                      <p className="m-0 mentorDesc">
                        Wordpress Developer at Kompas TV
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-none d-sm-block hero">
              <img
                className="heroImg"
                alt="hero"
                src="https://i.ibb.co/Jq9jDFg/green-chameleon-s9-CC2-SKy-SJM-unsplash-2.png"
              ></img>
            </div>
          </div>
        </div>
      </section>
      <section className="row m-0 justify-content-around pt-5">
        <div className="materi col-11 col-lg-7 col-xl-6 px-5 px-xl-5 py-4 m-xl-5">
          <h4 className="text-left">Susunan Materi</h4>
          <div className="rincian">
            <div className="row m-0 py-3">
              <h6 className="pr-5 align-self-center m-0">
                Digital Marketing 101
              </h6>
              <button className="col-8 col-md-4 px-2 py-1 my-3 my-md-0 d-flex justify-content-center navButton Secondary">
                <span className="textButton">Live streaming</span>
              </button>
              <div className="ml-auto align-self-center">
                <button
                  className="rincianButton"
                  onClick={() => setOpen(!open)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
                >
                  {renderRinciButton()}
                </button>
              </div>
            </div>
            <Collapse in={open}>
              <div class="collapse" id="example-collapse-text">
                <div className="px-3">
                  <p className="text-left">
                    What is Digital Marketing , Market targeting & persona ,
                    Digital Marketing Channel (customer path) , Digital
                    marketing funnel , Digital ads fundamental , dan Google
                    analytics insight
                  </p>
                  <p className="text-left opacity">
                    14 Maret 2021 | 16.00-19.00
                  </p>
                </div>
              </div>
            </Collapse>
          </div>
          <div className="rincian">
            <div className="row m-0 py-3">
              <h6 className="pr-5 align-self-center m-0">
                Content Marketing Concept
              </h6>
              <button className="col-8 col-md-4 px-2 py-1 my-3 my-md-0 d-flex justify-content-center navButton Secondary">
                <span className="textButton">Video materi</span>
              </button>
              <div className="ml-auto align-self-center">
                <i class="bi bi-plus-lg"></i>
              </div>
            </div>
          </div>
          <div className="rincian">
            <div className="row m-0 py-3">
              <h6 className="pr-5 align-self-center m-0">
                Search Engine Optimization (SEO)
              </h6>
              <button className="col-8 col-md-4 px-2 py-1 my-3 my-md-0 d-flex justify-content-center navButton Secondary">
                <span className="textButton">Video materi</span>
              </button>
              <div className="ml-auto align-self-center">
                <i class="bi bi-plus-lg"></i>
              </div>
            </div>
          </div>
          <div className="rincian">
            <div className="row m-0 py-3">
              <h6 className="pr-5 align-self-center m-0">
                Social Media Marketing
              </h6>
              <button className="col-8 col-md-4 px-2 py-1 my-3 my-md-0 d-flex justify-content-center navButton Secondary">
                <span className="textButton">Live streaming</span>
              </button>
              <div className="ml-auto align-self-center">
                <i class="bi bi-plus-lg"></i>
              </div>
            </div>
          </div>
          <div className="rincian">
            <div className="row m-0 py-3">
              <h6 className="pr-5 align-self-center m-0">Email Marketing</h6>
              <button className="col-8 col-md-4 px-2 py-1 my-3 my-md-0 d-flex justify-content-center navButton Secondary">
                <span className="textButton">Live streaming</span>
              </button>
              <div className="ml-auto align-self-center">
                <i class="bi bi-plus-lg"></i>
              </div>
            </div>
          </div>
          <div className="rincian">
            <div className="row m-0 py-3">
              <h6 className="pr-5 align-self-center m-0">Social Media Ads</h6>
              <button className="col-8 col-md-4 px-2 py-1 my-3 my-md-0 d-flex justify-content-center navButton Secondary">
                <span className="textButton">Live Streaming</span>
              </button>
              <div className="ml-auto align-self-center">
                <i class="bi bi-plus-lg"></i>
              </div>
            </div>
          </div>
          <div className="rincian">
            <div className="row m-0 py-3">
              <h6 className="pr-5 align-self-center m-0">Google Ads</h6>
              <button className="col-8 col-md-4 px-2 py-1 my-3 my-md-0 d-flex justify-content-center navButton Secondary">
                <span className="textButton">Video materi</span>
              </button>
              <div className="ml-auto align-self-center">
                <i class="bi bi-plus-lg"></i>
              </div>
            </div>
          </div>
          <div className="rincian">
            <p className="text-left pt-3 opacity font-italic">
              *Jadwal kelas dapat berubah
            </p>
          </div>
        </div>
        <div className="materi mt-5 mt-lg-0 col-11 col-lg-4 px-5 py-4 m-xl-5">
          <h4 className="text-left">Output Program</h4>
          <div className="d-flex pt-2 output">
            <i class="bi bi-check-lg pr-2"></i>
            <p className="text-left">
              Memiliki pemahaman konseptual sebagai Digital Marketer
            </p>
          </div>
          <div className="d-flex pt-2 output">
            <i class="bi bi-check-lg pr-2"></i>
            <p className="text-left">
              {" "}
              Memahami komponen utama dan tools dalam Digital Marketing (SEO,
              SEM, Advertising, Campaign dll)
            </p>
          </div>
          <div className="d-flex pt-2 output">
            <i class="bi bi-check-lg pr-2"></i>
            <p className="text-left">
              Mampu memahami dan melakukan strategi dalam pemasaran digital
            </p>
          </div>
          <div className="d-flex pt-2 output">
            <i class="bi bi-check-lg pr-2"></i>
            <p className="text-left">Memiliki portofolio Real-Project</p>
          </div>
          <div className="d-flex pt-2 output">
            <i class="bi bi-check-lg pr-2"></i>
            <p className="text-left">
              Mendapatkan kesempatan direkrut oleh perusahaan (Hiring-Partner on
              Hiring-Day)
            </p>
          </div>
          <div className="row output">
            <div>
              <div className="pb-3 text-left">
                <img className="pr-2" alt="certificate" src={sertif}></img>
                <span className="px-md-2">E-Certificate</span>
              </div>
              <div className="pb-3 text-left">
                <img className="pr-2" alt="material" src={materi}></img>
                <span className="px-md-2">Copy of Materials</span>
              </div>
            </div>
            <div>
              <div className="pb-3 text-left">
                <img className="pr-2" alt="certificate" src={user2}></img>
                <span className="px-md-2">Intensive Mentorship</span>
              </div>
              <div className="pb-3 text-left">
                <img className="pr-2" alt="certificate" src={task}></img>
                <span className="px-md-2">Free Access to Hiring Day</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="row m-0">
        <div className="syarat text-left col-md-6  m-xl-5 px-5 py-4">
          <h4>Syarat dan Ketentuan</h4>
          <p className="pt-2">
            Semua pembayaran tidak dapat diuangkan kembali dan tidak bisa
            dialihkan ke workshop yang lain. Namun, anda diperbolehkan untuk
            memindah tangankan tiket anda ke orang lain dengan syarat melakukan
            konfirmasi terlebih dahulu kepada penyelenggara.<br></br>
            <br></br> Segala pemberitahuan mengenai informasi dan perubahan
            kelas akan disampaikan langsung oleh sistem kami melalui email,
            harap melakukan pengecekan email secara berkala.<br></br>
            <br></br> Jika ada kendala atau pertanyaan lebih lanjut, hubungi
            Whatsapp Official Waktukita di +62 811-2640-520
          </p>
        </div>
        <div className="harga text-left col-md-4 m-xl-5 px-5 py-4">
          <div className="d-flex justify-content-between align-items-center">
            <div className>
              <p className="opacity m-0">Harga</p>
              <p className="font-weight-bold m-0">Rp2.000.000,-</p>
            </div>
            <div className="col-8 col-md-12 col-lg-8">
              <button className="col-md-12 d-flex justify-content-center Primary formButton">
                Beli Kelas
              </button>
            </div>
          </div>
          <h5 className="pt-4 pb-3">Voucher Kelas</h5>
          <div className="d-flex">
            <img alt="discount" className="mr-3" src={discount}></img>
            <div className="align-self-center">
              <p className="harga m-0">Potongan Rp100.000</p>
              <p className="opacity m-0">DISKON100RIBU</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="relate p-md-5 p-4">
          <h3 className="font-weight-bold text-left">Kelas yang serupa</h3>
          <div className="row m-2 mt-5 beranda">
            {cards.map((cards) => (
              <div className="px-0 px-md-3 col-md-6 col-lg-3 px-xl-2">
                <div class="card p-0 berandaCardFull">
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
                          <span className="pl-3 align-self-center">
                            John Doe
                          </span>
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
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default RincianKelas;
