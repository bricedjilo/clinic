import React from "react";

import about01 from "./images/01.png";
import about02 from "./images/02.png";
import about03 from "./images/03.png";
import about04 from "./images/04.png";

import "./about.css";

export const About = (props) => {
  return (
    <section className="about style-1 padding-tb bg-ash">
      <div className="pattan-shape"></div>
      <div className="container">
        <div className="section-header">
          <h2>
            Awesome Theme For{" "}
            <span className="theme-color">Medical & Health</span> Websites
          </h2>
        </div>
        <div className="section-wrapper">
          <div className="row justify-content-center no-gutters">
            <div className="col-xl-3 col-md-6 col-12">
              <div className="about-item style-1 text-center">
                <div className="about-thumb">
                  <img src={about01} alt="about" />
                </div>
                <div className="about-content">
                  <h5>Medical Treatment</h5>
                  <p>
                    Caborin levera then andin tha qualit bwdh thenig covae thm
                    anying value cordin
                  </p>
                  <a href="#" className="text-btn">
                    Get Appointments
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-12">
              <div className="about-item style-1 text-center">
                <div className="about-thumb">
                  <img src={about02} alt="about" />
                </div>
                <div className="about-content">
                  <h5>Emergency Help</h5>
                  <p>
                    Caborin levera then andin tha qualit bwdh thenig covae thm
                    anying value cordin
                  </p>
                  <a href="#" className="text-btn">
                    Call us Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-12">
              <div className="about-item style-1 text-center">
                <div className="about-thumb">
                  <img src={about03} alt="about" />
                </div>
                <div className="about-content">
                  <h5>Locations & Directions</h5>
                  <p>
                    Caborin levera then andin tha qualit bwdh thenig covae thm
                    anying value cordin
                  </p>
                  <a href="#" className="text-btn">
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-12">
              <div className="about-item style-1 text-center">
                <div className="about-thumb">
                  <img src={about04} alt="about" />
                </div>
                <div className="about-content">
                  <h5>Qualified Doctors</h5>
                  <p>
                    Caborin levera then andin tha qualit bwdh thenig covae thm
                    anying value cordin
                  </p>
                  <a href="#" className="text-btn">
                    Find a Doctors
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
