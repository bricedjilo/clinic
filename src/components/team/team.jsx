import React from "react";

// import shape01 from "./images/shape/01.jpg";
import team01 from "./images/01.jpg";
import team02 from "./images/02.jpg";
import team03 from "./images/03.jpg";
import team04 from "./images/04.jpg";

import "./team.css";

export const Team = () => {
  return (
    <section className="team-section relative padding-tb bg-white">
      <div className="pattan-shape"></div>
      <div className="container">
        <div className="section-header">
          <h2>
            <span className="d-block">Who We Are</span> Meet Our{" "}
            <span className="theme-color">Professional Doctors</span>
          </h2>
        </div>
        <div className="section-wrapper">
          <div className="row justify-content-center no-gutters">
            <div className="col-lg-6 col-12">
              <div className="team-item style-1">
                <div className="team-inner">
                  <div className="team-thumb">
                    <img src={team01} alt="team-thumb" />
                  </div>
                  <div className="team-content">
                    <h5 className="member-name">Dr. Jason Kovalsky</h5>
                    <span className="member-dagi">Sergion Specialist</span>
                    <p className="member-details">
                      Dr. Jason Kovalsky is and internist in rochester and has
                      been in practilce between 5-8 years{" "}
                    </p>
                    <ul className="lab-ul">
                      <li>
                        <span>Speciality</span>: Sergion Specialist
                      </li>
                      <li>
                        <span>Degrees</span>: M.D. of Medicine
                      </li>
                      <li>
                        <span>Experiences</span>: 06+ Years Ago
                      </li>
                      <li>
                        <span>Follow us</span>:{" "}
                        <a href="#">
                          <i className="icofont-facebook"></i>
                        </a>
                        <a href="#">
                          <i className="icofont-twitter"></i>
                        </a>
                        <a href="#">
                          <i className="icofont-skype"></i>
                        </a>
                        <a href="#">
                          <i className="icofont-instagram"></i>
                        </a>
                        <a href="#">
                          <i className="icofont-pinterest"></i>
                        </a>
                      </li>
                    </ul>
                    <a href="team-single.html" className="text-btn">
                      View Portfolio
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="team-item style-1">
                <div className="team-inner">
                  <div className="team-thumb">
                    <img src={team02} alt="team-thumb" />
                  </div>
                  <div className="team-content">
                    <h5 className="member-name">Dr. Bangile Yusha</h5>
                    <span className="member-dagi">Sergion Specialist</span>
                    <p className="member-details">
                      Dr. Bangile Yusha is and internist in rochester and has
                      been in practilce between 5-8 years{" "}
                    </p>
                    <ul className="lab-ul">
                      <li>
                        <span>Speciality</span>: Sergion Specialist
                      </li>
                      <li>
                        <span>Degrees</span>: M.D. of Medicine
                      </li>
                      <li>
                        <span>Experiences</span>: 06+ Years Ago
                      </li>
                      <li>
                        <span>Follow us</span>:{" "}
                        <a href="#">
                          <i className="icofont-facebook"></i>
                        </a>
                        <a href="#">
                          <i className="icofont-twitter"></i>
                        </a>
                        <a href="#">
                          <i className="icofont-skype"></i>
                        </a>
                        <a href="#">
                          <i className="icofont-instagram"></i>
                        </a>
                        <a href="#">
                          <i className="icofont-pinterest"></i>
                        </a>
                      </li>
                    </ul>
                    <a href="team-single.html" className="text-btn">
                      View Portfolio
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="team-item style-1">
                <div className="team-inner">
                  <div className="team-thumb">
                    <img src={team03} alt="team-thumb" />
                  </div>
                  <div className="team-content">
                    <h5 className="member-name">Dr. Lubna Khanna</h5>
                    <span className="member-dagi">Sergion Specialist</span>
                    <p className="member-details">
                      Dr. Lubna Khanna is and internist in rochester and has
                      been in practilce between 5-8 years{" "}
                    </p>
                    <ul className="lab-ul">
                      <li>
                        <span>Speciality</span>: Sergion Specialist
                      </li>
                      <li>
                        <span>Degrees</span>: M.D. of Medicine
                      </li>
                      <li>
                        <span>Experiences</span>: 06+ Years Ago
                      </li>
                      <li>
                        <span>Follow us</span>:{" "}
                        <a href="#">
                          <i className="icofont-facebook"></i>
                        </a>
                        <a href="#">
                          <i className="icofont-twitter"></i>
                        </a>
                        <a href="#">
                          <i className="icofont-skype"></i>
                        </a>
                        <a href="#">
                          <i className="icofont-instagram"></i>
                        </a>
                        <a href="#">
                          <i className="icofont-pinterest"></i>
                        </a>
                      </li>
                    </ul>
                    <a href="team-single.html" className="text-btn">
                      View Portfolio
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="team-item style-1">
                <div className="team-inner">
                  <div className="team-thumb">
                    <img src={team04} alt="team-thumb" />
                  </div>
                  <div className="team-content">
                    <h5 className="member-name">Dr. William Khanna</h5>
                    <span className="member-dagi">Sergion Specialist</span>
                    <p className="member-details">
                      Dr. William Khanna is and internist in rochester and has
                      been in practilce between 5-8 years{" "}
                    </p>
                    <ul className="lab-ul">
                      <li>
                        <span>Speciality</span>: Sergion Specialist
                      </li>
                      <li>
                        <span>Degrees</span>: M.D. of Medicine
                      </li>
                      <li>
                        <span>Experiences</span>: 06+ Years Ago
                      </li>
                      <li>
                        <span>Follow us</span>:{" "}
                        <a href="#">
                          <i className="icofont-facebook"></i>
                        </a>
                        <a href="#">
                          <i className="icofont-twitter"></i>
                        </a>
                        <a href="#">
                          <i className="icofont-skype"></i>
                        </a>
                        <a href="#">
                          <i className="icofont-instagram"></i>
                        </a>
                        <a href="#">
                          <i className="icofont-pinterest"></i>
                        </a>
                      </li>
                    </ul>
                    <a href="team-single.html" className="text-btn">
                      View Portfolio
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <a href="team.html" className="lab-btn">
              <span>
                View All Doctors<i className="icofont-double-right"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
