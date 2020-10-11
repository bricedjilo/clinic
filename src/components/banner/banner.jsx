import React from "react";

import icon01 from "./images/icon-01.png";
import icon02 from "./images/icon-02.png";
import icon03 from "./images/icon-03.png";
import video01 from "./images/video/icon-01.png";

import "./banner.css";

export const Banner = (props) => {
  return (
    <section className="banner style-1">
      <div className="banner-top">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-8 col-12">
              <div className="banner-content-area">
                <div className="banner-content">
                  <h1>
                    Bringing{" "}
                    <span className="theme-color font-l"> Health </span>
                    to Life For The Whole
                    <span className="primary-color font-l"> Family </span>
                  </h1>
                  <div className="banner-btn">
                    <a href="#" className="lab-btn">
                      <span>
                        Get Appointments
                        <i className="icofont-rounded-double-right"></i>
                      </span>
                    </a>
                    <div className="video-btn">
                      <a
                        href="https://www.youtube.com/embed/JZGvyoEK6sw"
                        data-rel="lightcase"
                        title="Watch Now"
                        className="video-icon"
                      >
                        <img src={video01} alt="video" />
                        <div className="wave-wrapper">
                          <div className="wave-pulse wave-pulse-1"></div>
                          <div className="wave-pulse wave-pulse-2"></div>
                          <div className="wave-pulse wave-pulse-3"></div>
                          <div className="wave-pulse wave-pulse-4"></div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
                  <i>Give us a Call</i>
                </h6>
                <h5>001-888-123-4567</h5>
              </div>
            </div>
            <div className="post-item">
              <div className="post-thumb">
                <img src={icon02} alt="banner" />
              </div>
              <div className="post-content">
                <h6>
                  <i>Send us a Message</i>
                </h6>
                <h5>medicap@mail.com</h5>
              </div>
            </div>
            <div className="post-item">
              <div className="post-thumb">
                <img src={icon03} alt="banner" />
              </div>
              <div className="post-content">
                <h6>
                  <i>Visit our Location</i>
                </h6>
                <h5>02-07 Suitland Street 120</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
