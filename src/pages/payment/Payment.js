import React, { useState } from "react";
import Navbar2 from "../../components/navbar/Navbar2";
import icon from "../../resources/symbols/XMLID1386(active).svg";
import calendar from "../../resources/calendar/calendar.svg";
import clock from "../../resources/basic/clock.svg";
import location from "../../resources/basic/location_outline.svg";
import PopUpMetodePembayaran from "./popUp/PopUpPayment";
import PopUpPayment from "./popUp/PopUpPayment2";

const Payment = () => {
  const [popUp, setPopUp] = useState();
  const [popUp2, setPopUp2] = useState();

  return (
    <div>
      <div>
        <Navbar2 />
        <div className="my-5">
          <h2 className="titleForm">Pembayaran</h2>
          <img
            className="mx-auto symbolPosition"
            alt="symbol"
            style={{ width: "20px", height: "45px" }}
            src={icon}
          ></img>
        </div>
        <div className="row m-0 justify-content-md-center">
          <div className="desc px-4 px-md-5 py-3 py-md-5 pr-lg-3 px-xl-5 text-left col-12 col-lg-4 col-md-6 col-xl-3">
            <p className="opacity">Nama Kelas</p>
            <h4 className="font-weight-bold">DIGITAL MARKETING</h4>
            <p className="opacity pt-4">Waktu Pelaksanaan</p>
            <div className="d-flex">
              <img
                className="iconPrimary mr-3"
                alt="calendar"
                src={calendar}
              ></img>
              <p>1 Maret - 3 Juni 2021</p>
            </div>
            <div className="d-flex">
              <img className="iconPrimary mr-3" alt="clock" src={clock}></img>
              <p className="col-6 p-0">Senin dan Kamis 18:30 - 21:00 WIB</p>
            </div>
            <div className="d-flex">
              <img
                className="iconPrimary mr-3"
                alt="location"
                src={location}
              ></img>
              <p>BLOK71, Yogyakarta</p>
            </div>
          </div>
          <div className="px-4 px-md-5 py-3 py-md-5 px-lg-4 px-xl-5 text-left col-12 col-md-6 col-lg-4">
            <p className="opacity m-0">Pilih jenis pembayaran</p>
            <div className="payment-radio flex-column d-flex align-items-start">
              <div>
                <input
                  type="radio"
                  id="Bayar 1x"
                  name="jenis_pembayaran"
                  value="Bayar 1x"
                />
                <label className="px-3" for="Bayar 1x">
                  Bayar 1x{" "}
                  <span className="pl-3 opacity">Rp3.000.000 /bulan</span>
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="Bayar 2x"
                  name="jenis_pembayaran"
                  value="Bayar 2x"
                />
                <label className="px-3" for="Bayar 2x">
                  Bayar 2x
                  <span className="pl-3 opacity">Rp1.500.000 /bulan</span>
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="Bayar 3x"
                  name="jenis_pembayaran"
                  value="Bayar 3x"
                />
                <label className="px-3" for="Bayar 3x">
                  Bayar 3x
                  <span className="pl-3 opacity">Rp1.000.000 /bulan</span>
                </label>
              </div>
            </div>
            <div className="d-flex pt-4 justify-content-between payment-metode">
              <p className="opacity m-0 ">Metode pembayaran</p>
              <button
                onClick={() => setPopUp(true)}
                type="button"
                href
                className="m-0 p-0 buttonNone"
              >
                <span style={{ color: "#00a69c" }}>
                  Lihat semua<i class="bi bi-chevron-right"></i>
                </span>
              </button>
            </div>
            <img alt="BCA" src="https://i.ibb.co/Bg5tX6F/image-27.png"></img>
            <span className="pl-3 font-weight-bold">BCA Virtual Account</span>
            <p className="opacity m-0 pt-4">Masukan voucher</p>
            <div className="d-flex flex-wrap flex-xl-nowrap">
              <input
                type="text"
                placeholder="DISKON100RIBU"
                className="mr-3"
              ></input>
              <button className="col-8 col-md-6 px-2 py-1 my-2 d-flex justify-content-center navButton Secondary">
                <span className="textButton">Gunakan voucher</span>
              </button>
            </div>
            <p className="mt-1 mx-2 payment-voucher-status">
              Voucher berhasil digunakan
            </p>
          </div>
          <div className="px-4 px-md-5 pl-lg-3 px-xl-5 py-2 py-md-4 my-4 payment-detail col-12 col-md-7 col-lg-4">
            <h6 className="font-weight-bold">Rincian pembayaran</h6>
            <div className="d-flex justify-content-between pt-2">
              <p>Tagihan pertama</p>
              <p>Rp1.500.000,-</p>
            </div>
            <div className="d-flex justify-content-between">
              <p>Potongan harga</p>
              <p>-Rp100.000,-</p>
            </div>
            <div className="d-flex justify-content-between">
              <p>Fee payment</p>
              <p>Rp5.000,-</p>
            </div>
            <div className="d-flex justify-content-between pt-2">
              <h5 className="font-weight-bold">Total tagihan</h5>
              <h5 className="font-weight-bold">Rp1.405.000,-</h5>
            </div>
            <button
              onClick={() => setPopUp2(true)}
              className="mt-5 col-md-12 d-flex justify-content-center Primary formButton"
            >
              Bayar sekarang
            </button>
          </div>
        </div>
      </div>
      <PopUpMetodePembayaran trigger={popUp}>
        <button className="buttonNone" onClick={() => setPopUp(false)}>
          <i class="bi bi-x-lg popUpClose p-3"></i>
        </button>
        <div>
          <p className="font-weight-bold">Debit Instan</p>
          <div className="d-flex align-items-center metode-pembayaran py-3">
            <img
              className=""
              alt="BCA"
              src="https://i.ibb.co/Bg5tX6F/image-27.png"
            ></img>
            <span className="m-0 pl-3">Direct Debit BRI</span>
            <i class="bi bi-chevron-right ml-auto"></i>
          </div>
          <div className="d-flex align-items-center metode-pembayaran py-3">
            <img
              className=""
              alt="BCA"
              src="https://i.ibb.co/Bg5tX6F/image-27.png"
            ></img>
            <span className="m-0 pl-3">BCA OneKlik</span>
            <i class="bi bi-chevron-right ml-auto"></i>
          </div>
          <div className="d-flex align-items-center metode-pembayaran py-3">
            <img
              className=""
              alt="BCA"
              src="https://i.ibb.co/Bg5tX6F/image-27.png"
            ></img>
            <span className="m-0 pl-3">Direct Debit Mandiri</span>
            <i class="bi bi-chevron-right ml-auto"></i>
          </div>
          <div className="d-flex align-items-center metode-pembayaran py-3">
            <img
              className=""
              alt="BCA"
              src="https://i.ibb.co/Bg5tX6F/image-27.png"
            ></img>
            <span className="m-0 pl-3">OCTO Cash by CIMB Niaga</span>
            <i class="bi bi-chevron-right ml-auto"></i>
          </div>
        </div>
      </PopUpMetodePembayaran>
      <PopUpPayment trigger={popUp2}>
        <button className="buttonNone" onClick={() => setPopUp2(false)}>
          <i class="bi bi-x-lg popUpClose p-3"></i>
        </button>
        <img alt="BCA" src="https://i.ibb.co/Bg5tX6F/image-27.png"></img>
        <span className="pl-3 font-weight-bold">BCA Virtual Account</span>
        <div className="pt-4 justify-content-between payment-metode">
          <p className="opacity m-0 ">Nomor Virtual Account</p>
          <div className="d-flex justify-content-between">
            <p className="m-0 font-weight-bold">80777082214741160</p>
            <button type="button" href className="m-0 p-0 buttonNone">
              <span style={{ color: "#00a69c" }}>Lihat semua</span>
            </button>
          </div>
        </div>
        <div className="pt-4 justify-content-between payment-metode">
          <p className="opacity m-0 ">Total tagihan</p>
          <div className="d-flex justify-content-between">
            <p className="m-0 font-weight-bold">Rp1.405.000,-</p>
          </div>
        </div>
        <button className="mt-5 col-md-12 d-flex justify-content-center Primary formButton">
          Cek status pembayaran
        </button>
      </PopUpPayment>
    </div>
  );
};

export default Payment;
