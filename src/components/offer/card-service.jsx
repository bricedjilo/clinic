import React from "react";

// import img from "./images/vaccination.jpg";

import Card from "react-bootstrap/Card";

export const CardService = (props) => {
  console.log(props.service.image);
  return (
    <Card key={props.service.id}>
      <Card.Img variant="top" src={require(`${props.service.image}`)} />
      <Card.Body>
        <Card.Title className="theme-color">{props.service.title}</Card.Title>
        <Card.Text>{props.service.text}</Card.Text>
        {/* <a href="service-single.html" className="text-btn">
          En savoir plus
        </a> */}
      </Card.Body>
    </Card>
  );
};
