import React from "react";

import footer01 from "./images/01.png";
import footer02 from "./images/02.png";
import footer03 from "./images/03.png";
import whatsapp from "./images/whatsapp.png";
import logoRc from "./images/logo/logo-rc.png";
import planLocal from "./images/plan_de_localisation_no_white_bg.png";

import "./footer.css";

export const Footer = (props) => {
  return (
    <footer className="relative" id="footer">
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
                    <i>Appelez nous</i>
                  </p>
                  <h6>
                    <a href="tel:+237695056524" style={{ color: "#ffffff" }}>
                      (+237) 695 056 524
                    </a>
                  </h6>
                  <p>
                    <i>WhatsApp</i>
                  </p>
                  <h6>
                    <a
                      href="https://wa.me/237671516067?text=Bonjour Royal Clinic !"
                      style={{ color: "#ffffff" }}
                    >
                      (+237) 671 516 067
                    </a>
                  </h6>
                </div>
              </div>
              <div className="ft-item">
                <div className="ft-thumb">
                  <img src={footer02} alt="footer" />
                </div>
                <div className="ft-content">
                  <p>
                    <i>Envoyez nous un courriel</i>
                  </p>
                  <h6>royalclinic.dla@gmail.com</h6>
                </div>
              </div>
              <div className="ft-item">
                <div className="ft-thumb">
                  <img src={footer03} alt="footer" />
                </div>
                <div className="ft-content">
                  <p>
                    <i>Visitez nos locaux</i>
                  </p>
                  <h6>
                    Ancienne Route Bonaberi (Quartier des princes), Derrière
                    ancien cinéma le "FOHATO" après le Centre des Impôts
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-top">
          <div className="container">
            <div className="ft-bottom">
              <div className="row justify-content-center no-gutters">
                <div className="col-xl-4 col-lg-6 col-12 mt-4">
                  <div className="ft-about-part">
                    <div className="bg-asb-thumb"></div>
                    <div className="ft-title">
                      <h4>A propos de Royal Clinic</h4>
                    </div>
                    <div className="ft-body">
                      <p>
                        Assertvely communicate mission critical agnments
                        economically sound communities through dynamic
                        Phosfluoresc internal sources
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-12 mt-4">
                  <div className="ft-opening-part">
                    <div className="ft-title">
                      <h4>Nos heures d'ouvertures</h4>
                    </div>
                    <div className="ft-body">
                      <ul className="lab-ul">
                        <li>
                          <span>Lundi</span>
                          <span>24/24 (toujours ouvert)</span>
                        </li>
                        <li>
                          <span>Mardi</span>
                          <span>24/24 (toujours ouvert)</span>
                        </li>
                        <li>
                          <span>Mercredi</span>
                          <span>24/24 (toujours ouvert)</span>
                        </li>
                        <li>
                          <span>Jeudi</span>
                          <span>24/24 (toujours ouvert)</span>
                        </li>
                        <li>
                          <span>Vendredi</span>
                          <span>24/24 (toujours ouvert)</span>
                        </li>
                        <li>
                          <span>Samedi</span>
                          <span>24/24 (toujours ouvert)</span>
                        </li>
                        <li>
                          <span>Dimanche</span>
                          <span>24/24 (toujours ouvert)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-12 mt-4">
                  <div className="ft-map-area">
                    <div className="ft-map">
                      <iframe
                        title="google-embed"
                        src="https://maps.google.com/maps?q=bonaberi%20douala&t=&z=13&ie=UTF8&iwloc=&output=embed"
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
          <div className="container" id="plan-local">
            <div className="mt-5">
              <img
                src={planLocal}
                alt="Plan de localisation"
                className="img-fluid mb-5"
                width="100%"
              />
            </div>
            <div className="section-wrapper">
              <div className="left">
                <img src={logoRc} alt="footer-logo" className="img-fluid" />
              </div>
              <ul className="right lab-ul">
                <li>
                  <a
                    className="whatsapp"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://wa.me/237671516067?text=Bonjour Royal Clinic !"
                  >
                    <img src={whatsapp} alt="WhatsApp" className="img-fluid" />
                  </a>
                  <span>WhatsApp</span>
                </li>
                <li>
                  {/* eslint-disable-next-line */}
                  <a
                    className="facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/Royalclinicdla/"
                  >
                    <i className="icofont-facebook"></i>
                  </a>
                  <span>Facebook</span>
                </li>
                {/* <li>
                  eslint-disable-next-line
                  <a className="twitter" href="#">
                    <i className="icofont-twitter"></i>
                  </a>
                  <span>Twitter</span>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="copy-right-part style-2 bg-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="row justify-content-center">
              <div className="col-12">
                <p>
                  Ancienne route Bonaberi (Quartier des princes), derrière
                  l'ancien cinema le "Fohato" après le Centre des Impots
                </p>
                <p>BP 6819 Douala, Cameroun</p>
              </div>
            </div>
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
