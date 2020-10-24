import React from "react";

import icon01jpg from "./images/icon/01.jpg";
import icon01 from "./images/icon/01.png";
import icon02 from "./images/icon/02.png";
import icon03 from "./images/icon/03.png";
import icon04 from "./images/icon/04.png";
import icon05 from "./images/icon/05.png";
import icon06 from "./images/icon/06.png";
import icon07 from "./images/icon/07.png";

import img1 from "./images/01.jpg";

import "./service.css";

export const Service = (props) => {
  return (
    <section className="service-section style-1 padding-tb bg-white">
      <div className="pattan-shape"></div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-header">
              <h2>
                Medicap Used By More Than{" "}
                <span className="theme-color">12,000 Medical & Health</span>{" "}
                Professionals Center Worldwide
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="service-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="section-wrapper">
                <div className="row align-items-center">
                  <div className="col-xl-3 col-12">
                    <div className="service-tab-top">
                      <ul className="nav lab-ul" id="myTab" role="tablist">
                        <li className="nav-item">
                          <a
                            className="nav-link d-flex align-items-center active"
                            id="Surgery-tab"
                            data-toggle="tab"
                            href="#Surgery"
                            role="tab"
                            aria-controls="Surgery"
                            aria-selected="true"
                          >
                            <img src={icon01} alt="category-icon" />
                            <p>Outpatient Surgery</p>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link d-flex align-items-center"
                            id="Cardiac-tab"
                            data-toggle="tab"
                            href="#Cardiac"
                            role="tab"
                            aria-controls="Cardiac"
                            aria-selected="false"
                          >
                            <img src={icon02} alt="category-icon" />
                            <p>Cardiac Clinicy</p>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link d-flex align-items-center"
                            id="Ophthalmology-tab"
                            data-toggle="tab"
                            href="#Ophthalmology"
                            role="tab"
                            aria-controls="Ophthalmology"
                            aria-selected="false"
                          >
                            <img src={icon03} alt="category-icon" />
                            <p>Ophthalmology Clinic</p>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link d-flex align-items-center"
                            id="Gynaecological-tab"
                            data-toggle="tab"
                            href="#Gynaecological"
                            role="tab"
                            aria-controls="Gynaecological"
                            aria-selected="false"
                          >
                            <img src={icon04} alt="category-icon" />
                            <p>Gynaecological Clinic</p>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link d-flex align-items-center"
                            id="Outpatient-tab"
                            data-toggle="tab"
                            href="#Outpatient"
                            role="tab"
                            aria-controls="Outpatient"
                            aria-selected="false"
                          >
                            <img src={icon05} alt="category-icon" />
                            <p>Outpatient Rehabilitation</p>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link d-flex align-items-center"
                            id="Laryngological-tab"
                            data-toggle="tab"
                            href="#Laryngological"
                            role="tab"
                            aria-controls="Laryngological"
                            aria-selected="false"
                          >
                            <img src={icon06} alt="category-icon" />
                            <p>Laryngological Clinic</p>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link d-flex align-items-center"
                            id="Pediatric-tab"
                            data-toggle="tab"
                            href="#Pediatric"
                            role="tab"
                            aria-controls="Pediatric"
                            aria-selected="false"
                          >
                            <img src={icon07} alt="category-icon" />
                            <p>Pediatric Clinic</p>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-9 col-12">
                    <div className="tab-content" id="myTabContent">
                      <div
                        className="tab-pane fade show active"
                        id="Surgery"
                        role="tabpanel"
                      >
                        <div className="card">
                          <div className="row no-gutters align-items-center flex-row-reverse">
                            <div className="col-lg-5">
                              <div className="service-thumb">
                                <img
                                  src={img1}
                                  className="card-img"
                                  alt="p-category"
                                />
                                <div className="st-icon">
                                  <img src={icon01} alt="category-icon" />
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-7">
                              <div className="card-body">
                                <h4>Outpatient Surgery</h4>
                                <p>
                                  Procedur Aran Manu Producs Rahe Convene Cuvte
                                  Mann Manucu Produc Rather Conven Cuvate Mana
                                  Ths Conven Credib envisioneer ubiquitous
                                  nichereri markets nsparen Dramaticay enable
                                  worldwide action items whereas mne Procedu
                                  Aran Manu Producs Rather Convene Cuvae Man
                                  Testin Motin Was Procedur Arramin
                                </p>
                                <ul className="lab-ul">
                                  <li>
                                    <i className="icofont-rounded-double-right"></i>
                                    Qualified Doctors
                                  </li>
                                  <li>
                                    <i className="icofont-rounded-double-right"></i>
                                    Furthering Patien Care
                                  </li>
                                  <li>
                                    <i className="icofont-rounded-double-right"></i>
                                    24×7 Emergency Services
                                  </li>
                                  <li>
                                    <i className="icofont-rounded-double-right"></i>
                                    Integrity & Innovations
                                  </li>
                                  <li>
                                    <i className="icofont-rounded-double-right"></i>
                                    General Medical
                                  </li>
                                  <li>
                                    <i className="icofont-rounded-double-right"></i>
                                    Model of Healthcare
                                  </li>
                                </ul>
                                <div className="service-footer">
                                  <div className="sf-left">
                                    <div className="sfl-thumb">
                                      <img src={icon01jpg} alt="service-icon" />
                                    </div>
                                    <div className="sfl-content">
                                      {/* eslint-disable-next-line */}
                                      <a href="#">
                                        <h6>Dr. William Smith</h6>
                                      </a>
                                      <p>Specialist</p>
                                    </div>
                                  </div>
                                  <div className="sf-right">
                                    <a
                                      href="service-single.html"
                                      className="lab-btn"
                                    >
                                      <span>
                                        Read More
                                        <i className="icofont-rounded-double-right"></i>
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        className="tab-pane fade"
                        id="Cardiac"
                        role="tabpanel"
                      >
                        <div className="card">
                          <div className="row no-gutters align-items-center flex-row-reverse">
                            <div className="col-lg-5">
                              <div className="service-thumb">
                                <img
                                  src="assets/images/service/17.jpg"
                                  className="card-img"
                                  alt="p-category"
                                />
                                <div className="st-icon">
                                  <img
                                    src="assets/images/service/icon/02.png"
                                    alt="category-icon"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-7">
                              <div className="card-body">
                                <h4>Cardiac Clinicy</h4>
                                <p>
                                  Procedur Aran Manu Producs Rahe Convene Cuvte
                                  Mann Manucu Produc Rather Conven Cuvate Mana
                                  Ths Conven Credib envisioneer ubiquitous
                                  nichereri markets nsparen Dramaticay enable
                                  worldwide action items whereas mne Procedu
                                  Aran Manu Producs Rather Convene Cuvae Man
                                  Testin Motin Was Procedur Arramin
                                </p>
                                <ul className="lab-ul">
                                  <li>
                                    <i className="icofont-rounded-double-right"></i>
                                    Qualified Doctors
                                  </li>
                                  <li>
                                    <i className="icofont-rounded-double-right"></i>
                                    Furthering Patien Care
                                  </li>
                                  <li>
                                    <i className="icofont-rounded-double-right"></i>
                                    24×7 Emergency Services
                                  </li>
                                  <li>
                                    <i className="icofont-rounded-double-right"></i>
                                    Integrity & Innovations
                                  </li>
                                  <li>
                                    <i className="icofont-rounded-double-right"></i>
                                    General Medical
                                  </li>
                                  <li>
                                    <i className="icofont-rounded-double-right"></i>
                                    Model of Healthcare
                                  </li>
                                </ul>
                                <div className="service-footer">
                                  <div className="sf-left">
                                    <div className="sfl-thumb">
                                      <img
                                        src="assets/images/service/icon/01.jpg"
                                        alt="service-icon"
                                      />
                                    </div>
                                    <div className="sfl-content">
                                      {/* eslint-disable-next-line */}
                                      <a href="#">
                                        <h6>Dr. William Smith</h6>
                                      </a>
                                      <p>Specialist</p>
                                    </div>
                                  </div>
                                  <div className="sf-right">
                                    <a
                                      href="service-single.html"
                                      className="lab-btn"
                                    >
                                      <span>
                                        Read More
                                        <i className="icofont-rounded-double-right"></i>
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        className="tab-pane fade"
                        id="Ophthalmology"
                        role="tabpanel"
                      >
                        <div className="card">
                          <div className="row no-gutters align-items-center flex-row-reverse">
                            <div className="col-lg-5">
                              <div className="service-thumb">
                                <img
                                  src="assets/images/service/18.jpg"
                                  className="card-img"
                                  alt="p-category"
                                />
                                <div className="st-icon">
                                  <img
                                    src="assets/images/service/icon/03.png"
                                    alt="category-icon"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-7">
                              <div className="card-body">
                                <h4>Ophthalmology Clinic</h4>
                                <p>
                                  Procedur Aran Manu Producs Rahe Convene Cuvte
                                  Mann Manucu Produc Rather Conven Cuvate Mana
                                  Ths Conven Credib envisioneer ubiquitous
                                  nichereri markets nsparen Dramaticay enable
                                  worldwide action items whereas mne Procedu
                                  Aran Manu Producs Rather Convene Cuvae Man
                                  Testin Motin Was Procedur Arramin
                                </p>
                                <ul className="lab-ul">
                                  <li>
                                    <i className="icofont-rounded-double-right"></i>
                                    Qualified Doctors
                                  </li>
                                  <li>
                                    <i className="icofont-rounded-double-right"></i>
                                    Furthering Patien Care
                                  </li>
                                  <li>
                                    <i className="icofont-rounded-double-right"></i>
                                    24×7 Emergency Services
                                  </li>
                                  <li>
                                    <i className="icofont-rounded-double-right"></i>
                                    Integrity & Innovations
                                  </li>
                                  <li>
                                    <i className="icofont-rounded-double-right"></i>
                                    General Medical
                                  </li>
                                  <li>
                                    <i className="icofont-rounded-double-right"></i>
                                    Model of Healthcare
                                  </li>
                                </ul>
                                <div className="service-footer">
                                  <div className="sf-left">
                                    <div className="sfl-thumb">
                                      <img
                                        src="assets/images/service/icon/01.jpg"
                                        alt="service-icon"
                                      />
                                    </div>
                                    <div className="sfl-content">
                                      {/* eslint-disable-next-line  */}
                                      <a href="#">
                                        <h6>Dr. William Smith</h6>
                                      </a>
                                      <p>Specialist</p>
                                    </div>
                                  </div>
                                  <div className="sf-right">
                                    <a
                                      href="service-single.html"
                                      className="lab-btn"
                                    >
                                      <span>
                                        Read More
                                        <i className="icofont-rounded-double-right"></i>
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        className="tab-pane fade"
                        id="Gynaecological"
                        role="tabpanel"
                      >
                        <div className="card">
                          <div className="row no-gutters align-items-center flex-row-reverse">
                            <div className="col-lg-5">
                              <div className="service-thumb">
                                <img
                                  src="assets/images/service/19.jpg"
                                  className="card-img"
                                  alt="p-category"
                                />
                                <div className="st-icon">
                                  <img
                                    src="assets/images/service/icon/04.png"
                                    alt="category-icon"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-7">
                              <div className="card-body">
                                <h4>Gynaecological Clinic</h4>
                                <p>
                                  Procedur Aran Manu Producs Rahe Convene Cuvte
                                  Mann Manucu Produc Rather Conven Cuvate Mana
                                  Ths Conven Credib envisioneer ubiquitous
                                  nichereri markets nsparen Dramaticay enable
                                  worldwide action items whereas mne Procedu
                                  Aran Manu Producs Rather Convene Cuvae Man
                                  Testin Motin Was Procedur Arramin
                                </p>
                                <ul className="lab-ul">
                                  <li>
                                    <i className="icofont-rounded-double-right"></i>
                                    Qualified Doctors
                                  </li>
                                  <li>
                                    <i className="icofont-rounded-double-right"></i>
                                    Furthering Patien Care
                                  </li>
                                  <li>
                                    <i className="icofont-rounded-double-right"></i>
                                    24×7 Emergency Services
                                  </li>
                                  <li>
                                    <i className="icofont-rounded-double-right"></i>
                                    Integrity & Innovations
                                  </li>
                                  <li>
                                    <i className="icofont-rounded-double-right"></i>
                                    General Medical
                                  </li>
                                  <li>
                                    <i className="icofont-rounded-double-right"></i>
                                    Model of Healthcare
                                  </li>
                                </ul>
                                <div className="service-footer">
                                  <div className="sf-left">
                                    <div className="sfl-thumb">
                                      <img
                                        src="assets/images/service/icon/01.jpg"
                                        alt="service-icon"
                                      />
                                    </div>
                                    <div className="sfl-content">
                                      {/* eslint-disable-next-line  */}
                                      <a href="#">
                                        <h6>Dr. William Smith</h6>
                                      </a>
                                      <p>Specialist</p>
                                    </div>
                                  </div>
                                  <div className="sf-right">
                                    <a
                                      href="service-single.html"
                                      className="lab-btn"
                                    >
                                      <span>
                                        Read More
                                        <i className="icofont-rounded-double-right"></i>
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        className="tab-pane fade"
                        id="Outpatient"
                        role="tabpanel"
                      >
                        <div className="card">
                          <div className="row no-gutters align-items-center flex-row-reverse">
                            <div className="col-lg-5">
                              <div className="service-thumb">
                                <img
                                  src="assets/images/service/20.jpg"
                                  className="card-img"
                                  alt="p-category"
                                />
                                <div className="st-icon">
                                  <img
                                    src="assets/images/service/icon/05.png"
                                    alt="category-icon"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-7">
                              <div className="card-body">
                                <h4>Outpatient Rehabilitation</h4>
                                <p>
                                  Procedur Aran Manu Producs Rahe Convene Cuvte
                                  Mann Manucu Produc Rather Conven Cuvate Mana
                                  Ths Conven Credib envisioneer ubiquitous
                                  nichereri markets nsparen Dramaticay enable
                                  worldwide action items whereas mne Procedu
                                  Aran Manu Producs Rather Convene Cuvae Man
                                  Testin Motin Was Procedur Arramin
                                </p>
                                <ul className="lab-ul">
                                  <li>
                                    <i className="icofont-rounded-double-right"></i>
                                    Qualified Doctors
                                  </li>
                                  <li>
                                    <i className="icofont-rounded-double-right"></i>
                                    Furthering Patien Care
                                  </li>
                                  <li>
                                    <i className="icofont-rounded-double-right"></i>
                                    24×7 Emergency Services
                                  </li>
                                  <li>
                                    <i className="icofont-rounded-double-right"></i>
                                    Integrity & Innovations
                                  </li>
                                  <li>
                                    <i className="icofont-rounded-double-right"></i>
                                    General Medical
                                  </li>
                                  <li>
                                    <i className="icofont-rounded-double-right"></i>
                                    Model of Healthcare
                                  </li>
                                </ul>
                                <div className="service-footer">
                                  <div className="sf-left">
                                    <div className="sfl-thumb">
                                      <img
                                        src="assets/images/service/icon/01.jpg"
                                        alt="service-icon"
                                      />
                                    </div>
                                    <div className="sfl-content">
                                      {/* eslint-disable-next-line  */}
                                      <a href="#">
                                        <h6>Dr. William Smith</h6>
                                      </a>
                                      <p>Specialist</p>
                                    </div>
                                  </div>
                                  <div className="sf-right">
                                    <a
                                      href="service-single.html"
                                      className="lab-btn"
                                    >
                                      <span>
                                        Read More
                                        <i className="icofont-rounded-double-right"></i>
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        className="tab-pane fade"
                        id="Laryngological"
                        role="tabpanel"
                      >
                        <div className="card">
                          <div className="row no-gutters align-items-center flex-row-reverse">
                            <div className="col-lg-5">
                              <div className="service-thumb">
                                <img
                                  src="assets/images/service/21.jpg"
                                  className="card-img"
                                  alt="p-category"
                                />
                                <div className="st-icon">
                                  <img
                                    src="assets/images/service/icon/06.png"
                                    alt="category-icon"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-7">
                              <div className="card-body">
                                <h4>Laryngological Clinic</h4>
                                <p>
                                  Procedur Aran Manu Producs Rahe Convene Cuvte
                                  Mann Manucu Produc Rather Conven Cuvate Mana
                                  Ths Conven Credib envisioneer ubiquitous
                                  nichereri markets nsparen Dramaticay enable
                                  worldwide action items whereas mne Procedu
                                  Aran Manu Producs Rather Convene Cuvae Man
                                  Testin Motin Was Procedur Arramin
                                </p>
                                <ul className="lab-ul">
                                  <li>
                                    <i className="icofont-rounded-double-right"></i>
                                    Qualified Doctors
                                  </li>
                                  <li>
                                    <i className="icofont-rounded-double-right"></i>
                                    Furthering Patien Care
                                  </li>
                                  <li>
                                    <i className="icofont-rounded-double-right"></i>
                                    24×7 Emergency Services
                                  </li>
                                  <li>
                                    <i className="icofont-rounded-double-right"></i>
                                    Integrity & Innovations
                                  </li>
                                  <li>
                                    <i className="icofont-rounded-double-right"></i>
                                    General Medical
                                  </li>
                                  <li>
                                    <i className="icofont-rounded-double-right"></i>
                                    Model of Healthcare
                                  </li>
                                </ul>
                                <div className="service-footer">
                                  <div className="sf-left">
                                    <div className="sfl-thumb">
                                      <img
                                        src="assets/images/service/icon/01.jpg"
                                        alt="service-icon"
                                      />
                                    </div>
                                    <div className="sfl-content">
                                      {/* eslint-disable-next-line  */}
                                      <a href="#">
                                        <h6>Dr. William Smith</h6>
                                      </a>
                                      <p>Specialist</p>
                                    </div>
                                  </div>
                                  <div className="sf-right">
                                    <a
                                      href="service-single.html"
                                      className="lab-btn"
                                    >
                                      <span>
                                        Read More
                                        <i className="icofont-rounded-double-right"></i>
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        className="tab-pane fade"
                        id="Pediatric"
                        role="tabpanel"
                      >
                        <div className="card">
                          <div className="row no-gutters align-items-center flex-row-reverse">
                            <div className="col-lg-5">
                              <div className="service-thumb">
                                <img
                                  src="assets/images/service/22.jpg"
                                  className="card-img"
                                  alt="p-category"
                                />
                                <div className="st-icon">
                                  <img
                                    src="assets/images/service/icon/07.png"
                                    alt="category-icon"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-7">
                              <div className="card-body">
                                <h4>Pediatric Clinic</h4>
                                <p>
                                  Procedur Aran Manu Producs Rahe Convene Cuvte
                                  Mann Manucu Produc Rather Conven Cuvate Mana
                                  Ths Conven Credib envisioneer ubiquitous
                                  nichereri markets nsparen Dramaticay enable
                                  worldwide action items whereas mne Procedu
                                  Aran Manu Producs Rather Convene Cuvae Man
                                  Testin Motin Was Procedur Arramin
                                </p>
                                <ul className="lab-ul">
                                  <li>
                                    <i className="icofont-rounded-double-right"></i>
                                    Qualified Doctors
                                  </li>
                                  <li>
                                    <i className="icofont-rounded-double-right"></i>
                                    Furthering Patien Care
                                  </li>
                                  <li>
                                    <i className="icofont-rounded-double-right"></i>
                                    24×7 Emergency Services
                                  </li>
                                  <li>
                                    <i className="icofont-rounded-double-right"></i>
                                    Integrity & Innovations
                                  </li>
                                  <li>
                                    <i className="icofont-rounded-double-right"></i>
                                    General Medical
                                  </li>
                                  <li>
                                    <i className="icofont-rounded-double-right"></i>
                                    Model of Healthcare
                                  </li>
                                </ul>
                                <div className="service-footer">
                                  <div className="sf-left">
                                    <div className="sfl-thumb">
                                      <img
                                        src="assets/images/service/icon/01.jpg"
                                        alt="service-icon"
                                      />
                                    </div>
                                    <div className="sfl-content">
                                      {/* eslint-disable-next-line  */}
                                      <a href="#">
                                        <h6>Dr. William Smith</h6>
                                      </a>
                                      <p>Specialist</p>
                                    </div>
                                  </div>
                                  <div className="sf-right">
                                    <a
                                      href="service-single.html"
                                      className="lab-btn"
                                    >
                                      <span>
                                        Read More
                                        <i className="icofont-rounded-double-right"></i>
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
