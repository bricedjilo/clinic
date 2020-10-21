import React from "react";

import Form from "react-bootstrap/Form";

import "./contact.css";

export const Contact = ({ services }) => {
  const options = services.map((service) => <option>{service.title}</option>);
  return (
    <section className="contact-section style-1 padding-tb" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 col-sm-12 col-12">
            <div className="section-header text-lg-left">
              <h2>
                <span className="d-block">Vous avez une question ?</span>{" "}
                Contactez l'un de nos{" "}
                <span className="theme-color">docteurs</span>
              </h2>
            </div>
            {/* <div className="section-wrapper"> */}
            <Form>
              <Form.Group controlId="contactForm.ControlInput1">
                <Form.Label>Adresse e-mail</Form.Label>
                <Form.Control type="text" placeholder="Votre Prenom" />
                <Form.Control type="text" placeholder="Votre Nom" />
                <Form.Label>Votre adresse e-mail</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group controlId="contactForm.ControlSelect">
                <Form.Label>Services</Form.Label>
                <Form.Control as="select">{options}</Form.Control>
              </Form.Group>
              <Form.Group controlId="contactForm.ControlTextarea">
                <Form.Control
                  as="textarea"
                  rows="3"
                  placeholder="Votre message"
                />
              </Form.Group>
            </Form>
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};
