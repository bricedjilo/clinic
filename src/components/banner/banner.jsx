import React from "react";

import Carousel from "react-bootstrap/Carousel";

import banner from "./images/banner-rc.jpg";

import "./banner.css";

export const Banner = (props) => {
  // const [index, setIndex] = useState(0);

  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex);
  // };
  return (
    <Carousel className="banner" fade={true} interval={2500}>
      <Carousel.Item>
        <img
          className="d-block img-fluid w-100"
          src={banner}
          alt="First slide"
        />
        <div className="banner-content w-100 slogan">
          <h1>
            Votre <span className="theme-color font-l"> Santé</span>
            ,
            <br />
            Notre
            <span className="primary-color font-l"> Satisfaction </span>
          </h1>
          <a href="#contact" className="btn btn-success btn-sm btn-rdv">
            Obtenez un rendez-vous{" "}
            <i className="icofont-rounded-double-right"></i>
          </a>
        </div>
        <Carousel.Caption>
          <p
            style={{
              color: "#00aa01",
              "font-size": "2em",
              "font-weight": "bold",
            }}
            className="banner-caption"
          >
            Soins et services de qualité dans un cadre royal
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item key="02">
        <img className="d-block img-fluid w-100" src={banner} alt="2nd slide" />
        <div className="banner-content slogan w-100">
          <h1>
            Votre <span className="theme-color font-l"> Santé</span>
            ,
            <br />
            Notre
            <span className="primary-color font-l"> Satisfaction </span>
          </h1>
          <a href="#contact" className="btn btn-success btn-sm btn-rdv">
            Obtenez un rendez-vous{" "}
            <i className="icofont-rounded-double-right"></i>
          </a>
        </div>
        <Carousel.Caption>
          <p
            style={{
              color: "#00aa01",
              "font-size": "2em",
              "font-weight": "bold",
            }}
            className="banner-caption"
          >
            Soins et services de qualité dans un cadre royal
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item key="03">
        <img className="d-block img-fluid w-100" src={banner} alt="3rd slide" />
        <div className="banner-content slogan w-100">
          <h1>
            Votre <span className="theme-color font-l"> Santé</span>
            ,
            <br />
            Notre
            <span className="primary-color font-l"> Satisfaction </span>
          </h1>
          <a href="#contact" className="btn btn-success btn-sm btn-rdv">
            Obtenez un rendez-vous{" "}
            <i className="icofont-rounded-double-right"></i>
          </a>
        </div>
        <Carousel.Caption>
          <p
            style={{
              color: "#00aa01",
              "font-size": "2em",
              "font-weight": "bold",
            }}
            className="banner-caption"
          >
            Soins et services de qualité dans un cadre royal
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
