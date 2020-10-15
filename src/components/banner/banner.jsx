import React, { useState } from "react";

import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

import banner from "./images/banner-rc.jpg";

import "./banner.css";

export const Banner = (props) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="banner">
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
          <Button className="btn btn-success btn-sm btn-rdv">
            Obtenez un rendez-vous{" "}
            <i className="icofont-rounded-double-right"></i>
          </Button>
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
      <Carousel.Item>
        <img className="d-block img-fluid w-100" src={banner} alt="2nd slide" />
        <div className="banner-content slogan w-100">
          <h1>
            Votre <span className="theme-color font-l"> Santé</span>
            ,
            <br />
            Notre
            <span className="primary-color font-l"> Satisfaction </span>
          </h1>
          <Button className="btn btn-success btn-sm">
            Obtenez un rendez-vous{" "}
            <i className="icofont-rounded-double-right"></i>
          </Button>
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
