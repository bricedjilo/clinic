import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

import logoRc from "./images/logo-rc.png";

import "./menu-bar.css";

export const MenuBar = (props) => {
  return (
    <Navbar
      bg="light"
      expand="lg"
      fixed="top"
      className="shadow-sm mb-5 bg-grey"
    >
      <Navbar.Brand href="#home">
        <a href="index.html">
          <img src={logoRc} alt="logo" className="menu-logo" />
          <span style={{ display: "inline-block" }} className="org-name ml-2">
            Royal Clinic
          </span>
        </a>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#">Accueil</Nav.Link>
          <Nav.Link href="#link">Campagne</Nav.Link>
          <Nav.Link href="#link">Nos Services</Nav.Link>
          <Nav.Link href="#link">Localisation</Nav.Link>
          <Nav.Link href="#link">Nous Contacter</Nav.Link>
          {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
