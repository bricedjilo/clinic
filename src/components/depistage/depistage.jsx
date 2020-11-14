import React from "react";

import depistage13 from "./images/depistage-diabete-13.jpeg";
import depistage14 from "./images/depistage-diabete-14.jpeg";
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
              Gratuit du 13/11/2020 au 14/11/2020
            </span>{" "}
          </h2>
          <div className="depistage w-100">
            <img
              className="depistage-img w-100"
              src={depistage13}
              alt={"depistage diabete"}
            />
          </div>
        </div>
        <div className="section-header">
          <div className="depistage w-100">
            <img
              className="depistage-img w-100"
              src={depistage14}
              alt={"depistage diabete"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
