import React from "react";
import logo from "../../resources/images/logo.svg";
import grid from "../../pages/beranda/dashboard.svg";
import monitor from "../../resources/device/monitor.svg";
import vector from "../../resources/symbols/Vector (1).svg";
import credit_card from "../../resources/basic/credit_card.svg";
import settings from "../../resources/basic/settings.svg";
import user from "../../pages/beranda/Group 113.svg";
import calendar from "../../resources/symbols/Group 2700.svg";
import clock from "../../resources/symbols/Group 2699.svg";
import chart from "../../resources/chart/doughnut_chart.svg";
import notification from "../../resources/notification/notification_outline.svg";

const Student = () => {
  return (
    <div className="dashboard row m-0 justify-content-between">
      <div className="col-2 py-4 px-0 sidebar">
        <img className="img-fluid px-4 pb-5" alt="logo" src={logo}></img>
        <ul className="p-0">
          <li className="activeSidebar d-flex justify-content-between">
            <a href="/" className="d-flex py-3 px-4">
              <img alt="grid" src={grid}></img>
              <p className="m-0 pl-3">Dashboard</p>
            </a>
            <p className="d-none rectangle"></p>
          </li>
          <li className="d-flex justify-content-between">
            <a href="/" className="d-flex py-3 px-4">
              <img className="iconPrimary" alt="grid" src={monitor}></img>
              <p className="m-0 pl-3">Kelas</p>
            </a>
            <p className="d-none rectangle"></p>
          </li>
          <li className="d-flex justify-content-between">
            <a href="/" className="d-flex py-3 px-4">
              <img className="iconPrimary" alt="vector" src={vector}></img>
              <p className="m-0 pl-3">Pencapaian</p>
            </a>
            <p className="d-none rectangle"></p>
          </li>
          <li className="d-flex justify-content-between">
            <a href="/" className="d-flex py-3 px-4">
              <img
                className="iconPrimary"
                alt="credit_card"
                src={credit_card}
              ></img>
              <p className="m-0 pl-3">Transaksi</p>
            </a>
            <p className="d-none rectangle"></p>
          </li>
          <li className="d-flex justify-content-between">
            <a href="/" className="d-flex py-3 px-4">
              <img className="iconPrimary" alt="settings" src={settings}></img>
              <p className="m-0 pl-3">Pengaturan</p>
            </a>
            <p className="d-none rectangle"></p>
          </li>
        </ul>
      </div>
      <div className="py-4 px-4 col-8">
        <div className="text-left mb-4">
          <h2 className="">Halo, John!</h2>
          <p className="opacity">Fermentum elit ipsum in vestibulum leo.</p>
        </div>
        <div>
          <div className="dashboard-kelas d-flex justify-content-between">
            <h5 className="">Kelas yang akan datang</h5>
            <a href="/">
              Semua kelas<i class="bi bi-chevron-right"></i>
            </a>
          </div>
          <div className="d-flex m-0 justify-content-between">
            <div className="mr-3 p-3 dashboard-card-kelas">
              <div className="d-flex">
                <img
                  className="img-fluid col-3 px-0 rounded h-100"
                  alt="class1"
                  src="https://i.ibb.co/Jq9jDFg/green-chameleon-s9-CC2-SKy-SJM-unsplash-2.png"
                ></img>
                <div className="pl-3">
                  <h6 className="text-left text-uppercase">
                    Become a wordpress developer
                  </h6>
                  <div className="d-flex">
                    <img className="iconSecondary" alt="user" src={user}></img>
                    <span className="pl-2 align-self-center">John Doe</span>
                  </div>
                </div>
              </div>
              <div className="text-left pt-4">
                <img
                  className="iconSecondary"
                  alt="calendar"
                  src={calendar}
                ></img>
                <span className="pl-2">1 Februari - 30 Maret 2021</span>
              </div>
              <div className="pt-2 d-flex">
                <img className="iconSecondary" alt="clock" src={clock}></img>
                <div className="pl-2 text-left">
                  <p className="m-0">Senin dan Kamis</p>
                  <p className="m-0">18:30 - 21:00 WIB</p>
                </div>
              </div>
              <div className="text-left pt-2">
                <img className="iconSecondary" alt="clock" src={clock}></img>
                <span className="pl-2">BLOCK71, Yogyakarta</span>
              </div>
            </div>
            <div className="mr-3 p-3  dashboard-card-kelas">
              <div className="d-flex">
                <img
                  className="img-fluid col-3 px-0 rounded h-100"
                  alt="class1"
                  src="https://i.ibb.co/Jq9jDFg/green-chameleon-s9-CC2-SKy-SJM-unsplash-2.png"
                ></img>
                <div className="pl-3">
                  <h6 className="text-left text-uppercase">
                    Webinar menjadi UI/UX Designer
                  </h6>
                  <div className="d-flex">
                    <img className="iconSecondary" alt="user" src={user}></img>
                    <span className="pl-2 align-self-center">John Doe</span>
                  </div>
                </div>
              </div>
              <div className="text-left pt-4">
                <img
                  className="iconSecondary"
                  alt="calendar"
                  src={calendar}
                ></img>
                <span className="pl-2">1 Februari - 30 Maret 2021</span>
              </div>
              <div className="pt-2 d-flex">
                <img className="iconSecondary" alt="clock" src={clock}></img>
                <div className="pl-2 text-left">
                  <p className="m-0">Senin dan Kamis</p>
                  <p className="m-0">18:30 - 21:00 WIB</p>
                </div>
              </div>
              <div className="text-left pt-2">
                <img className="iconSecondary" alt="clock" src={clock}></img>
                <span className="pl-2">BLOCK71, Yogyakarta</span>
              </div>
            </div>
            <div className="mr-3 p-3  dashboard-card-kelas">
              <div className="d-flex">
                <img
                  className="img-fluid col-3 px-0 rounded h-100"
                  alt="class1"
                  src="https://i.ibb.co/Jq9jDFg/green-chameleon-s9-CC2-SKy-SJM-unsplash-2.png"
                ></img>
                <div className="pl-3">
                  <h6 className="text-left text-uppercase">
                    How to prepare your curriculum vitae
                  </h6>
                  <div className="d-flex">
                    <img className="iconSecondary" alt="user" src={user}></img>
                    <span className="pl-2 align-self-center">John Doe</span>
                  </div>
                </div>
              </div>
              <div className="text-left pt-4">
                <img
                  className="iconSecondary"
                  alt="calendar"
                  src={calendar}
                ></img>
                <span className="pl-2">1 Februari - 30 Maret 2021</span>
              </div>
              <div className="pt-2 d-flex">
                <img className="iconSecondary" alt="clock" src={clock}></img>
                <div className="pl-2 text-left">
                  <p className="m-0">Senin dan Kamis</p>
                  <p className="m-0">18:30 - 21:00 WIB</p>
                </div>
              </div>
              <div className="text-left pt-2">
                <img className="iconSecondary" alt="clock" src={clock}></img>
                <span className="pl-2">BLOCK71, Yogyakarta</span>
              </div>
            </div>
          </div>
          <div className="row m-0 justify-content-between">
            <div className="col-6 px-0">
              <h5 className="text-left pt-3">Minat saya</h5>
              <div className="pt-3">
                <div className="row m-0 p-3 dashboard-card-kelas">
                  <img
                    className="col-4 px-0 iconPrimary"
                    alt="chart"
                    src={chart}
                  ></img>
                  <div className="align-self-center col-8 text-left">
                    <div className="ml-5 d-flex pb-3 align-items-center">
                      <p
                        style={{ background: "#404041", opacity: "0.7" }}
                        className="p-2 circle m-0"
                      ></p>
                      <span className="pl-2">Teknologi (4 Kelas)</span>
                    </div>
                    <div className="ml-5 d-flex pb-3 align-items-center">
                      <p
                        style={{ background: "#CC0001", opacity: "0.7" }}
                        className="p-2 circle m-0"
                      ></p>
                      <span className="pl-2">Desain (4 Kelas)</span>
                    </div>
                    <div className="ml-5 d-flex pb-3 align-items-center">
                      <p
                        style={{ background: "#F3BA2B", opacity: "0.7" }}
                        className="p-2 circle m-0"
                      ></p>
                      <p className="pl-2 m-0">
                        Pengembangan software (4 Kelas)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 px-0">
              <h5 className="text-left pt-3">Statistik kelas</h5>
              <div className="row m-0 justify-content-between">
                <div className="dashboard-statistik-kelas p-3 mt-3 col-4">
                  <p>Selesai</p>
                  <h6 style={{ fontFamily: "Lato" }} className="m-0">
                    3
                  </h6>
                  <span className="opacity">Kelas</span>
                </div>
                <div className="dashboard-statistik-kelas p-3 mt-3 col-4">
                  <p>Berlangsung</p>
                  <h6 style={{ fontFamily: "Lato" }} className="m-0">
                    4
                  </h6>
                  <span className="opacity">Kelas</span>
                </div>
                <div className="align-self-center dashboard-statistik-tambah p-3 mt-3 col-3">
                  <a href="/">
                    <i class="bi bi-plus-lg"></i>
                    <p className="text-center m-0">Tambah Kelas</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-2 py-4 px-4 dashboard-right-sidebar">
        <div className="d-flex justify-content-end">
          <div className="d-flex">
            <img
              className="iconPrimary mr-5"
              alt="notification"
              src={notification}
            ></img>
            <p className="m-3 p-1 dashboard-notif circle position-absolute"></p>
          </div>
          <img
            className="img-fluid col-2 circle px-0"
            alt="profile-pic"
            src="https://i.ibb.co/592WbhN/Rectangle-72.png"
          ></img>
        </div>
        <div className="d-flex justify-content-between pt-5 mt-5">
          <h6>Mei 2021</h6>
          <div className="iconPrimary">
            <i class="bi bi-chevron-left"></i>
            <i class="bi bi-chevron-right"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Student;
