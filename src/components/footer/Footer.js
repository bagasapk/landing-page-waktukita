import React from "react";
import logo from "../../resources/images/Vector.svg";
import contact1 from "../../resources/contact/Group 56.svg";
import contact2 from "../../resources/contact/Group 55.svg";
import contact3 from "../../resources/contact/Group 54.svg";
import contact4 from "../../resources/contact/Group 50.svg";
import location from "../../resources/symbols/Group10.svg";
import ReactTooltip from "react-tooltip"; 
const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="d-none d-md-block d-lg-none pt-5 p-0">
          <div>
            <img alt="logo" src={logo}></img>
          </div>
          <div className="pt-md-4 pl-lg-3 text-lg-left text-center text-xl-center pl-xl-0">
            <h6>Contact Us</h6>
            <div>
              <img alt="messages" src={contact1}></img>
              <img alt="phone" src={contact2}></img>
              <img alt="linkedin" src={contact3}></img>
              <img alt="instagram" src={contact4}></img>
            </div>
          </div>
        </div>
      </div>
      <div className="footer d-md-flex justify-content-lg-between justify-content-md-around m-0">
        <div className="d-md-none pl-md-5 pt-5 col-md-4 col-lg-3 d-lg-flex flex-column justify-content-between p-0">
          <div>
            <img alt="logo" src={logo}></img>
          </div>
          <div className="pt-4 pt-md-0 pl-lg-3 text-lg-left text-center text-xl-center pl-xl-0">
            <h6>Contact Us</h6>
            <div>
              <img data-tip data-for="Email" alt="Email" src={contact1}></img>
              <ReactTooltip id="Email" effect="solid" place="bottom">
                <span>Email</span>
              </ReactTooltip>
              <img
                data-tip
                data-for="telephone"
                alt="telephone"
                src={contact2}
              ></img>
              <ReactTooltip id="telephone" effect="solid" place="bottom">
                <span>Telephone</span>
              </ReactTooltip>
              <img
                data-tip
                data-for="Linkedin"
                alt="linkedin"
                src={contact3}
              ></img>
              <ReactTooltip id="Linkedin" effect="solid" place="bottom">
                <span>Linkedin</span>
              </ReactTooltip>
              <img
                data-tip
                data-for="Instagram"
                alt="instagram"
                src={contact4}
              ></img>
              <ReactTooltip id="Instagram" effect="solid" place="bottom">
                <span>Instagram</span>
              </ReactTooltip>
            </div>
          </div>
        </div>
        <div className="pl-md-5 pl-lg-0 pt-md-0 pt-lg-5 mt-md-0 mt-lg-5 d-lg-flex col-md-4 col-lg-5 justify-content-around justify-md-content-around p-0">
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
        <div className="pt-4 pt-md-0 pt-lg-5 col-md-4 d-flex flex-column justify-content-around">
          <div className="pt-lg-5 pt-md-0 d-md-flex">
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

export default Footer;
