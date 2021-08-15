import React, { useState } from "react";
import Footer from "../../components/footer/Footer";
import Navbar2 from "../../components/navbar/Navbar2";
import icon2 from "../beranda/Group 113.svg";
import icon3 from "../beranda/Group 2753.svg";
import icon1 from "../tentang/Group10.svg";
import MultiSelect from "react-multi-select-component";

const SemuaKelas = () => {
  const cards = [
    { status: "Online", harga: "2.400.000" },
    { status: "Online", harga: "2.400.000" },
    { status: "Course", harga: "Gratis" },
    { status: "Online", harga: "Gratis" },
    { status: "Online", harga: "2.400.000" },
    { status: "Online", harga: "2.400.000" },
    { status: "Course", harga: "Gratis" },
    { status: "Online", harga: "Gratis" },
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

  const options = [
    { label: "Bisnis", value: "Bisnis" },
    { label: "Desain", value: "Desain" },
    { label: "Ekonomi", value: "Ekonomi" },
    { label: "Ilmu komunikasi", value: "Ilmu komunikasi" },
    { label: "Kerajinan tangan", value: "Kerajinan tangan" },
    { label: "Marketing", value: "Marketing" },
    { label: "Operasional", value: "Operasional" },
    { label: "Pengembangan website", value: "Pengembangan website" },
    { label: "Seni", value: "Seni" },
  ];

  const [selected, setSelected] = useState([]);

  return (
    <div>
      <Navbar2></Navbar2>
      <div className="p-4 p-mb-5">
        <div className="d-lg-flex justify-content-between paddingWaktuKita">
          <div className="d-md-flex col-md-6 col-lg-7 p-0">
            <div className="text-left col-12 col-md-8 pb-3 pb-lg-0 col-lg-4">
              <label htmlFor="kategori" className="kelas">
                Kategori
              </label>
              {/* <select id="kategori" style={{ color: "#CACACA" }}>
                <option value="">Pilih kategori</option>
                <option value="volvo">Volvo</option>
              </select> */}
              <MultiSelect
                options={options}
                value={selected}
                onChange={setSelected}
                labelledBy="Select"
                disableSearch
              />
            </div>
            <div className="text-left col-12 col-md-8 pb-3 pb-lg-0 col-lg-4 kelas">
              <label htmlFor="Rentang harga" className="kelas">
                Rentang harga
              </label>
              <select id="Rentang harga" style={{ color: "#CACACA" }}>
                <option disabled className="title" value="">
                  Semua Harga
                </option>
                <option value="volvo">0 - 1.000.000</option>
                <option value="volvo">1.000.001 - 2.000.000</option>
                <option value="volvo">{'>'} 2.000.000</option>
              </select>
            </div>
            <div className="text-left col-12 col-md-8 pb-3 pb-lg-0 col-lg-4 kelas">
              <label htmlFor="Waktu" className="kelas">
                Waktu
              </label>
              <select id="Waktu" style={{ color: "#CACACA" }}>
                <option disabled className="title" value="">Kapan saja</option>
                <option value="volvo">Januari</option>
                <option value="volvo">Februari</option>
                <option value="volvo">Maret</option>
                <option value="volvo">April</option>
                <option value="volvo">Mei</option>
                <option value="volvo">Juni</option>
                <option value="volvo">Juli</option>
                <option value="volvo">Agustus</option>
                <option value="volvo">September</option>
                <option value="volvo">Oktober</option>
                <option value="volvo">November</option>
                <option value="volvo">Desember</option>
              </select>
            </div>
          </div>
          <div className="d-flex pt-3 pt-md-0 col-md-6 col-lg-4 align-self-end kelas position-relative">
            <input type="text" placeholder="Saya sedang mencari kelas"></input>
            <i className="align-self-center position-absolute bi bi-search"></i>
          </div>
        </div>
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
        <div className="pb-5 d-flex justify-content-center">
          <button className="col-7 col-md-3 p-3 d-flex justify-content-center navButton Secondary">
            <span className="textButton">Kelas lainnya</span>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SemuaKelas;
