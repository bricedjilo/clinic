import React from "react";

// import Button from "react-bootstrap/Button";
import { CardService } from "./card-service";

// import offer02d from "./images/02d.jpg";
// import offer03 from "./images/03.jpg";
// import offer03d from "./images/03d.jpg";
// import offer04 from "./images/04.jpg";
// import offer04d from "./images/04d.jpg";
// import offer05 from "./images/05.jpg";
// import offer05d from "./images/05d.jpg";

import "./offer.css";

export const Offer = (props) => {
  const services = props.services.map((service) => (
    <div className="col-lg-6 col-12">
      <CardService service={service} />
    </div>
  ));
  return (
    <section className="service-section style-2 bg-ash" id="services">
      <div className="container">
        <div className="section-header">
          <h2>
            Quels Sont Les Services Medicaux que{" "}
            <span className="theme-color"> Nous Offrons ?</span>
          </h2>
        </div>
        <div className="section-wraper">
          <div className="row justify-content-center">{services}</div>
        </div>
      </div>
    </section>
  );
};
