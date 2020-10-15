import React from "react";

import offer02 from "./images/02.jpg";
import offer02d from "./images/02d.jpg";
import offer03 from "./images/03.jpg";
import offer03d from "./images/03d.jpg";
import offer04 from "./images/04.jpg";
import offer04d from "./images/04d.jpg";
import offer05 from "./images/05.jpg";
import offer05d from "./images/05d.jpg";

import "./offer.css";

export const Offer = () => {
  return (
    <section className="service-section style-2 bg-ash">
      <div className="container">
        <div className="section-header">
          <h2>
            Quels Sont Les Services Medicaux que{" "}
            <span className="theme-color"> Nous Offrons ?</span>
          </h2>
        </div>
        <div className="section-wraper">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-12">
              <div className="service-item style-1">
                <div className="service-thumb">
                  <img src={offer02} alt="service-thumb" />
                  <img src={offer02d} alt="service-thumb" />
                </div>
                <div className="service-content">
                  <h4 className="theme-color">Consultation généraliste</h4>
                  <p>
                    On the othes hand we denoun with righe ingnaton and dislke
                    men who are beued mnique deplo scalable catalys foring an
                    and demorng by the charms
                  </p>
                  <a href="service-single.html" className="text-btn">
                    En savoir plus
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="service-item style-1">
                <div className="service-thumb">
                  <img src={offer03} alt="service-thumb" />
                  <img src={offer03d} alt="service-thumb" />
                </div>
                <div className="service-content">
                  <h4 className="theme-color">Consultation spécialiste</h4>
                  <p>
                    On the othes hand we denoun with righe ingnaton and dislke
                    men who are beued mnique deplo scalable catalys foring an
                    and demorng by the charms
                  </p>
                  <a href="service-single.html" className="text-btn">
                    En savoir plus
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="service-item style-1">
                <div className="service-thumb">
                  <img src={offer04} alt="service-thumb" />
                  <img src={offer04d} alt="service-thumb" />
                </div>
                <div className="service-content">
                  <h4 className="theme-color">Hospitalisation</h4>
                  <p>
                    On the othes hand we denoun with righe ingnaton and dislke
                    men who are beued mnique deplo scalable catalys foring an
                    and demorng by the charms
                  </p>
                  <a href="service-single.html" className="text-btn">
                    En savoir plus
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="service-item style-1">
                <div className="service-thumb">
                  <img src={offer05} alt="service-thumb" />
                  <img src={offer05d} alt="service-thumb" />
                </div>
                <div className="service-content">
                  <h4 className="theme-color">Laboratoire</h4>
                  <p>
                    On the othes hand we denoun with righe ingnaton and dislke
                    men who are beued mnique deplo scalable catalys foring an
                    and demorng by the charms
                  </p>
                  <a href="service-single.html" className="text-btn">
                    En savoir plus
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="service-item style-1">
                <div className="service-thumb">
                  <img src={offer05} alt="service-thumb" />
                  <img src={offer05d} alt="service-thumb" />
                </div>
                <div className="service-content">
                  <h4 className="theme-color">Petite Chirurgie</h4>
                  <p>
                    On the othes hand we denoun with righe ingnaton and dislke
                    men who are beued mnique deplo scalable catalys foring an
                    and demorng by the charms
                  </p>
                  <a href="service-single.html" className="text-btn">
                    En savoir plus
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="service-item style-1">
                <div className="service-thumb">
                  <img src={offer05} alt="service-thumb" />
                  <img src={offer05d} alt="service-thumb" />
                </div>
                <div className="service-content">
                  <h4 className="theme-color">Kinésithérapie</h4>
                  <p>
                    On the othes hand we denoun with righe ingnaton and dislke
                    men who are beued mnique deplo scalable catalys foring an
                    and demorng by the charms
                  </p>
                  <a href="service-single.html" className="text-btn">
                    En savoir plus
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="service-item style-1">
                <div className="service-thumb">
                  <img src={offer05} alt="service-thumb" />
                  <img src={offer05d} alt="service-thumb" />
                </div>
                <div className="service-content">
                  <h4 className="theme-color">CPN & Accouchement</h4>
                  <p>
                    On the othes hand we denoun with righe ingnaton and dislke
                    men who are beued mnique deplo scalable catalys foring an
                    and demorng by the charms
                  </p>
                  <a href="service-single.html" className="text-btn">
                    En savoir plus
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="service-item style-1">
                <div className="service-thumb">
                  <img src={offer05} alt="service-thumb" />
                  <img src={offer05d} alt="service-thumb" />
                </div>
                <div className="service-content">
                  <h4 className="theme-color">Vaccination</h4>
                  <p>
                    On the othes hand we denoun with righe ingnaton and dislke
                    men who are beued mnique deplo scalable catalys foring an
                    and demorng by the charms
                  </p>
                  <a href="service-single.html" className="text-btn">
                    En savoir plus
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="text-center">
            <a href="service.html" className="btn btn-success btn-lg">
              <span>
                Tous nos services <i className="icofont-double-right"></i>
              </span>
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
};
