import React from "react";

import depistage from "./images/depistage-1.jpeg";
import "./depistage.css";

export const Depistage = (props) => {
  return (
    <section
      className="about style-1 padding-tb bg-ash section-depistage"
      id="depistages"
    >
      <div className="pattan-shape"></div>
      <div className="container">
        <div className="section-header">
          <h2>
            Grande Campagne de Dépistage{" "}
            <span className="theme-color">
              Graduit du 26/10/2020 au 30/10/2020
            </span>{" "}
          </h2>
          <div className="depistage w-100">
            <img
              className="depistage-img w-100"
              src={depistage}
              alt={"depistage"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
