import React from "react";

import footer01 from "./images/01.png";
import footer02 from "./images/02.png";
import footer03 from "./images/03.png";
import logoRc from "./images/logo/logo-rc.png";

import "./footer.css";

export const Footer = (props) => {
  return (
    <footer className="relative">
      <div className="pattan-shape"></div>
      <div className="footer-top-area">
        <div className="ft-top-abs-area">
          <div className="container">
            <div className="ft-top">
              <div className="ft-item">
                <div className="ft-thumb">
                  <img src={footer01} alt="footer" />
                </div>
                <div className="ft-content">
                  <p>
                    <i>Give us a Call</i>
                  </p>
                  <h6>+882-888-123-4567</h6>
                </div>
              </div>
              <div className="ft-item">
                <div className="ft-thumb">
                  <img src={footer02} alt="footer" />
                </div>
                <div className="ft-content">
                  <p>
                    <i>Send us a Message</i>
                  </p>
                  <h6>medicap@gmail.com</h6>
                </div>
              </div>
              <div className="ft-item">
                <div className="ft-thumb">
                  <img src={footer03} alt="footer" />
                </div>
                <div className="ft-content">
                  <p>
                    <i>Visit our Location</i>
                  </p>
                  <h6>07 Suitland Street 120 USA</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-top">
          <div className="container">
            <div className="ft-bottom">
              <div className="row justify-content-center no-gutters">
                <div className="col-xl-4 col-lg-6 col-12">
                  <div className="ft-about-part">
                    <div className="bg-asb-thumb"></div>
                    <div className="ft-title">
                      <h4>About Our Medicap</h4>
                    </div>
                    <div className="ft-body">
                      <p>
                        Assertvely communicate mission critical agnments
                        economically sound communities through dynamic
                        Phosfluoresc internal sources
                      </p>
                      <a href="#" className="lab-btn">
                        <span>
                          View Website <i className="icofont-double-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-12">
                  <div className="ft-opening-part">
                    <div className="ft-title">
                      <h4>Our Opening Hours</h4>
                    </div>
                    <div className="ft-body">
                      <ul className="lab-ul">
                        <li>
                          <span>Satarday</span>
                          <span>09:00 am - 10:00 pm</span>
                        </li>
                        <li>
                          <span>Sunday</span>
                          <span>09:00 am - 10:00 pm</span>
                        </li>
                        <li>
                          <span>Monday</span>
                          <span>09:00 am - 10:00 pm</span>
                        </li>
                        <li>
                          <span>Tuesday</span>
                          <span>09:00 am - 10:00 pm</span>
                        </li>
                        <li>
                          <span>Widnessday</span>
                          <span>09:00 am - 10:00 pm</span>
                        </li>
                        <li>
                          <span>Thirsday</span>
                          <span>09:00 am - 10:00 pm</span>
                        </li>
                        <li>
                          <span>Friday</span>
                          <span>09:00 am - 10:00 pm</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-12">
                  <div className="ft-map-area">
                    <div className="ft-map">
                      <iframe
                        title="google-embed"
                        src="https://maps.google.com/maps?q=new%40codexcoder&t=&z=17&ie=UTF8&iwloc=&output=embed"
                        className="iframe-google"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom bg-ash">
          <div className="container">
            <div className="section-wrapper">
              <div className="left">
                <img src={logoRc} alt="footer-logo" />
              </div>
              <ul className="right lab-ul">
                <li>
                  <a className="facebook" href="#">
                    <i className="icofont-facebook"></i>
                  </a>
                  <span>Facebook</span>
                </li>
                <li>
                  <a className="google" href="#">
                    <i className="icofont-google-plus"></i>
                  </a>
                  <span>Google Plus</span>
                </li>
                <li>
                  <a className="twitter" href="#">
                    <i className="icofont-twitter"></i>
                  </a>
                  <span>Twitter</span>
                </li>
                <li>
                  <a className="pinterest" href="#">
                    <i className="icofont-pinterest"></i>
                  </a>
                  <span>Pinterest</span>
                </li>
                <li>
                  <a className="linkedin" href="#">
                    <i className="icofont-linkedin"></i>
                  </a>
                  <span>Linkedin</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copy-right-part style-2 bg-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <p>
                &copy; 2020 <a href="index.html">Royal Clinic</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
