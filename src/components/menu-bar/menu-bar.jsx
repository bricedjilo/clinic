import React from "react";
// import { NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

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
          <NavHashLink to="#" className="nav-link">
            Accueil
          </NavHashLink>
          <NavHashLink to="#depistages" className="nav-link">
            Campagnes
          </NavHashLink>
          <NavHashLink to="#services" className="nav-link">
            Nos Services
          </NavHashLink>
          <NavHashLink to="#plan-local" className="nav-link">
            Visitez Nous
          </NavHashLink>
          <NavHashLink to="#footer" className="nav-link">
            Heures d'ouverture
          </NavHashLink>
          <NavHashLink to="#contact" className="nav-link">
            Contactez nous
          </NavHashLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
