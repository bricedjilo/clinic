import React from "react";

// import img from "./images/vaccination.jpg";

import Card from "react-bootstrap/Card";

export const CardService = ({ service }) => {
  return (
    <Card key={service.id}>
      <Card.Img variant="top" src={require(`${service.image}`)} />
      <Card.Body>
        <Card.Title className="theme-color">{service.title}</Card.Title>
        <Card.Text>
          <div dangerouslySetInnerHTML={{ __html: service.text }} />
        </Card.Text>
        {/* <a href="service-single.html" className="text-btn">
          En savoir plus
        </a> */}
      </Card.Body>
    </Card>
  );
};
