import React, { useEffect, useState } from "react";
import "./Kontak.css";
import icon1 from "./Group 56 (1).svg";
import icon2 from "./Group 55 (1).svg";
import icon3 from "../../resources/contact/Group 54.svg";
import icon4 from "../../resources/contact/Group 50.svg";
import location from "../../resources/symbols/Group10.svg";
import Navbar2 from "../../components/navbar/Navbar2";
import ReactTooltip from "react-tooltip";
import CompanyInfoService from "../../services/CompanyInfoService";
import { useForm } from "react-hook-form";
import ContactService from "../../services/ContactService";
import Swal from "sweetalert2";

const Kontak = () => {
  const [companyInfo, setCompanyInfo] = useState([]);
  const [copied, setCopied] = useState(false);
  const [errors, setErrors] = useState([]);
  const { register, handleSubmit } = useForm();
  const timeoutRef = React.useRef(null);

  useEffect(() => {
    retrieve();
  }, []);

  const retrieve = () => {
    CompanyInfoService.getAll()
      .then((response) => {
        setCompanyInfo(response.data.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleCopy = (e) => {
    navigator.clipboard.writeText(e);
    setCopied(copied ? true : true);
    timeoutRef.current = setTimeout(
      () => setCopied(copied ? false : false),
      2000
    );
  };

  const onSubmit = async (data) => {
    console.log(data);
    await ContactService.post(data)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          Swal.fire(
            "Thanks for being awesome!",
            "Thank you for contacting us, We have received your message and would like to thank you for writing to us. If your inquiry is urgent, please use the telephone number listed below to talk to one of our staff members. Otherwise, we will reply by email as soon as possible. Talk to you soon, Waktukita ",
            "success"
          ).then((response) => {
            if (response.isConfirmed) {
              window.location.reload();
            } else {
              window.location.reload();
            }
          });
        }
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const onError = (errors) => {
    setErrors(errors);
  };
  console.log(errors);
  return (
    <div>
      <Navbar2 />
      <div
        style={{ backgroundColor: "white" }}
        className="d-md-flex hubungikami paddingWaktuKita px-lg-5 "
      >
        <div className="col-lg-7 p-5 text-left">
          <h2>Hubungi Kami</h2>
          <p>
            Jika Anda menemui kendala, silakan hubungi kami melalui form
            berikut. Kami akan membalas pesan Anda melalui email yang Anda
            cantumkan.
          </p>
          <form onSubmit={handleSubmit(onSubmit, onError)}>
            <div
              style={{ textAlign: "left" }}
              className="d-flex flex-column col-xl-9 col-lg-11 p-0"
            >
              <div className="pt-4 pb-3 d-flex flex-column-reverse inputIcon">
              {errors.name && (
                  <div >
                    <i data-tip data-for="nameError" class="bi bi-exclamation-circle-fill errorIcon"></i>
                    <ReactTooltip id="nameError" effect="solid" place="top">
                      <span>{errors.name.message}</span>
                    </ReactTooltip>
                  </div>
                )}
                <input
                  className={errors.name ? "error" : ""}
                  id="namaLengkap"
                  type="text"
                  placeholder="John Doe"
                  autoFocus
                  {...register("name", {
                    required: { value: true, message: "Fullname required" },
                  })}
                ></input>
                <label htmlFor="namaLengkap" className="m-0">
                  Nama Lengkap
                </label>
              </div>
              <div className="pb-3 d-flex flex-column-reverse">
              {errors.email && (
                  <div >
                    <i data-tip data-for="emailError" class="bi bi-exclamation-circle-fill errorIcon"></i>
                    <ReactTooltip id="emailError" effect="solid" place="top">
                      <span>{errors.email.message}</span>
                    </ReactTooltip>
                  </div>
                )}
                <input
                  className={errors.email ? "error" : ""}
                  id="email"
                  type="email"
                  placeholder="john.doe@gmail.com"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email required",
                    },
                  })}
                ></input>
                <label htmlFor="email" className="m-0">
                  Email
                </label>
              </div>
              <div className="pb-3 d-flex flex-column-reverse">
              {errors.subjek && (
                  <div >
                    <i data-tip data-for="subjekError" class="bi bi-exclamation-circle-fill errorIcon"></i>
                    <ReactTooltip id="subjekError" effect="solid" place="top">
                      <span>{errors.subjek.message}</span>
                    </ReactTooltip>
                  </div>
                )}
                <input
                  className={errors.subjek ? "error" : ""}
                  id="subjek"
                  type="text"
                  placeholder="Subjek"
                  {...register("subjek", {
                    required: { value: true, message: "Subject required" },
                  })}
                ></input>
                <label htmlFor="subjek" className="m-0">
                  Subjek
                </label>
              </div>
              <div className="pb-3 d-flex flex-column-reverse">
                {errors.pesan && (
                  <div >
                    <i data-tip data-for="pesanError" class="bi bi-exclamation-circle-fill errorIcon"></i>
                    <ReactTooltip id="pesanError" effect="solid" place="top">
                      <span>{errors.pesan.message}</span>
                    </ReactTooltip>
                  </div>
                )}
                <textarea
                  className={errors.pesan ? "error" : ""}
                  cols="30"
                  rows="2"
                  id="pesan"
                  type="text"
                  placeholder="Tuliskan pesan anda disini"
                  {...register("pesan", {
                    required: { value: true, message: "Message required" },
                  })}
                ></textarea>
                <label htmlFor="pesan" className="m-0">
                  Pesan
                </label>
                {/* <input
                  id="pesan"
                  type="text"
                  placeholder="Tuliskan pesan anda disini"
                  // {...register("pesan", { required: { value: true } })}
                ></input> */}
              </div>
              <div className="d-flex justify-content-lg-end">
                <button
                  // style={{ width: "15vw" }}
                  className="d-flex justify-content-center navButton Primary col-lg-5"
                >
                  <span className="textButton">Kirim pesan</span>
                </button>
              </div>
            </div>
          </form>
        </div>
        {companyInfo
          ? companyInfo.map((item, index) => {
              return (
                <div
                  key={index}
                  style={{ backgroundColor: "#01988E", display: "block" }}
                  className="col-lg-5 ml-lg-5 pt-4 hubungikami2 d-flex flex-wrap"
                >
                  <div className="d-flex flex-column px-0 px-md-5 pt-5 mx-auto mx-md-0">
                    <h6 className="p-2 text-center text-md-left">
                      Kontak Kami
                    </h6>

                    <div>
                      <div className="p-2 d-flex ">
                        <button
                          className="buttonNone"
                          onClick={() => {
                            handleCopy(item.email);
                          }}
                        >
                          <img
                            data-tip
                            className="mx-1"
                            data-for="Email"
                            alt="Email"
                            src={icon1}
                          ></img>
                        </button>
                        <ReactTooltip id="Email" effect="solid" place="left">
                          <span>{copied ? "Copy to clipboard" : "Email"}</span>
                        </ReactTooltip>
                        <span className="pl-2 align-self-center">
                          {item.email}
                        </span>
                      </div>
                      <div className="p-2 d-flex">
                        <button
                          className="buttonNone"
                          onClick={() => {
                            handleCopy(item.phone_number);
                          }}
                        >
                          <img
                            data-tip
                            className="mx-1"
                            data-for="telephone"
                            alt="telephone"
                            src={icon2}
                          ></img>
                        </button>
                        <ReactTooltip
                          id="telephone"
                          effect="solid"
                          place="left"
                        >
                          <span>
                            {copied ? "Copy to clipboard" : "Telephone"}
                          </span>
                        </ReactTooltip>
                        <span className="pl-2 align-self-center">
                          {item.phone_number}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="px-5 pt-5 mt-1 text-left mx-auto mx-md-0">
                    <h6>Ikuti sosial media kami</h6>
                    <div className="py-3 text-center text-md-left">
                      <img
                        data-tip
                        data-for="Linkedin"
                        alt="linkedin"
                        src={icon3}
                      ></img>
                      <ReactTooltip id="Linkedin" effect="solid" place="bottom">
                        <span>{item.socialmedia_urls}</span>
                      </ReactTooltip>
                      <img
                        data-tip
                        data-for="Instagram"
                        className="pl-3"
                        alt="instagram"
                        src={icon4}
                      ></img>
                      <ReactTooltip
                        id="Instagram"
                        effect="solid"
                        place="bottom"
                      >
                        <span>{item.socialmedia_urls}</span>
                      </ReactTooltip>
                    </div>
                  </div>
                  <div className="p-lg-3 pt-4 pt-md-5 pt-lg-0 d-flex flex-column justify-content-around">
                    <div className="p-md-5 pt-lg-0 d-md-flex">
                      <img
                        className="align-self-start"
                        alt="loc"
                        src={location}
                      ></img>
                      <div className="col-md-10 pt-2 pt-md-0 text-md-left">
                        <h6>Yogyakarta</h6>
                        <p>{item.addresses}</p>
                      </div>
                    </div>
                    <div className="pl-md-5 d-md-flex pb-5">
                      <img
                        className="align-self-start"
                        alt="loc"
                        src={location}
                      ></img>
                      <div className="col-md-10 pt-2 pt-md-0 text-md-left">
                        <h6>Jakarta</h6>
                        <p>{item.addresses}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="border-top px-3 px-md-5 mx-5 pt-2">
                      <p>Copyright © 2021 Waktukita.com</p>
                    </div>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Kontak;
