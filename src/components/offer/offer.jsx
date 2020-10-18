import React from "react";

// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import gConsul from "./images/gconsultation.jpg";
import sConsul from "./images/sconsultation.png";
import hospitalisation from "./images/hospitalisation.jpeg";
import laboratoire from "./images/laboratoire.jpg";
import chirurgie from "./images/chirurgie.jpeg";
import kinesitherapie from "./images/kinesitherapie.jpg";
import accouchement from "./images/accouchement.png";
import vaccination from "./images/vaccination.jpg";
// import offer02d from "./images/02d.jpg";
// import offer03 from "./images/03.jpg";
// import offer03d from "./images/03d.jpg";
// import offer04 from "./images/04.jpg";
// import offer04d from "./images/04d.jpg";
// import offer05 from "./images/05.jpg";
// import offer05d from "./images/05d.jpg";

import "./offer.css";

export const Offer = () => {
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
          <div className="row justify-content-center">
            <div className="col-lg-6 col-12">
              <Card>
                <Card.Img variant="top" src={gConsul} />
                <Card.Body>
                  <Card.Title className="theme-color">
                    Consultation généraliste
                  </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <a href="service-single.html" className="text-btn">
                    En savoir plus
                  </a>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-6 col-12">
              <Card>
                <Card.Img variant="top" src={sConsul} />
                <Card.Body>
                  <Card.Title className="theme-color">
                    Consultation spécialiste
                  </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <a href="service-single.html" className="text-btn">
                    En savoir plus
                  </a>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-6 col-12">
              <Card>
                <Card.Img variant="top" src={hospitalisation} />
                <Card.Body>
                  <Card.Title className="theme-color">
                    Hospitalisation
                  </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <a href="service-single.html" className="text-btn">
                    En savoir plus
                  </a>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-6 col-12">
              <Card>
                <Card.Img variant="top" src={laboratoire} />
                <Card.Body>
                  <Card.Title className="theme-color">Laboratoire</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <a href="service-single.html" className="text-btn">
                    En savoir plus
                  </a>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-6 col-12">
              <Card>
                <Card.Img variant="top" src={chirurgie} />
                <Card.Body>
                  <Card.Title className="theme-color">
                    Petite Chirurgie
                  </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <a href="service-single.html" className="text-btn">
                    En savoir plus
                  </a>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-6 col-12">
              <Card>
                <Card.Img variant="top" src={kinesitherapie} />
                <Card.Body>
                  <Card.Title className="theme-color">
                    Kinésithérapie
                  </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <a href="service-single.html" className="text-btn">
                    En savoir plus
                  </a>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-6 col-12">
              <Card>
                <Card.Img variant="top" src={accouchement} />
                <Card.Body>
                  <Card.Title className="theme-color">
                    CPN & Accouchement
                  </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <a href="service-single.html" className="text-btn">
                    En savoir plus
                  </a>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-6 col-12">
              <Card>
                <Card.Img variant="top" src={vaccination} />
                <Card.Body>
                  <Card.Title className="theme-color">Vaccination</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <a href="service-single.html" className="text-btn">
                    En savoir plus
                  </a>
                </Card.Body>
              </Card>
            </div>
          </div>
          {/* <div className="text-center">
            <a href="service.html" className="btn btn-success btn-lg">
              <span>
                Tous nos services <i className="icofont-double-right"></i>
              </span>
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
};
