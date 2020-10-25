import React from "react";

import icon01 from "./images/icon-01.png";
import icon02 from "./images/icon-02.png";
import icon03 from "./images/icon-03.png";
import whatsapp from "./images/whatsapp.png";

import "./banner-bottom.css";

export const BannerBottom = () => {
  return (
    <section className="banner style-1 bg-ash b-bottom">
      <div className="banner-bottom">
        <div className="banner-bottom-pattan"></div>
        <div className="container">
          <div className="bottom-wrapper">
            <div className="post-item">
              <div className="post-thumb">
                <img src={icon01} alt="banner" />
              </div>
              <div className="post-content">
                <h6>
                  <i>Appelez nous</i>
                </h6>
                <h5>
                  <a href="tel:+237695056524" style={{ color: "#6fbd35" }}>
                    (+237) 695 056 524
                  </a>
                </h5>
              </div>
            </div>

            <div className="post-item">
              <div className="post-thumb">
                <img src={whatsapp} alt="banner" />
              </div>
              <div className="post-content">
                <h6>
                  <i>WhatsApp</i>
                </h6>
                <h5>
                  <a
                    href="https://wa.me/237671516067?text=Bonjour Royal Clinic !"
                    style={{ color: "#6fbd35" }}
                  >
                    (+237) 671 516 067
                  </a>
                </h5>
              </div>
            </div>

            <div className="post-item">
              <div className="post-thumb">
                <img src={icon02} alt="banner" />
              </div>
              <div className="post-content">
                <h6>
                  <i>Envoyez nous un courriel</i>
                </h6>
                <h5>office@royalclinic-dla</h5>
              </div>
            </div>

            <div className="post-item">
              <div className="post-thumb">
                <img src={icon03} alt="banner" />
              </div>
              <div className="post-content">
                <h6>
                  <i>Rendez nous visite</i>
                </h6>
                <h5>
                  Bonaberi, Derrière l'ancien <br /> cinéma le "FOHATO"
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
