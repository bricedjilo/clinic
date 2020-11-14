import React from "react";

import { NavHashLink } from "react-router-hash-link";

import Carousel from "react-bootstrap/Carousel";

import banner from "./images/banner-rc.jpg";
import bannerDepistage13 from "./images/banner-depistage-diabete-13.jpeg";
import bannerDepistage14 from "./images/banner-depistage-diabete-14.jpeg";

import "./banner.css";

export const Banner = (props) => {
  // const [index, setIndex] = useState(0);

  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex);
  // };
  return (
    <Carousel
      className="banner"
      fade={true}
      interval={2300}
      defaultActiveIndex={2}
    >
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
          <a href="#footer" className="btn btn-success btn-sm btn-rdv">
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
        <NavHashLink to="#depistages">
          <img
            className="d-block img-fluid w-100"
            src={bannerDepistage13}
            alt="2nd slide"
            style={{ float: "right" }}
          />
        </NavHashLink>
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item key="03">
        <NavHashLink to="#depistages">
          <img
            className="d-block img-fluid w-100"
            src={bannerDepistage14}
            alt="3rd slide"
            style={{ float: "right" }}
          />
        </NavHashLink>
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
