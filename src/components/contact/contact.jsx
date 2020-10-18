import React from "react";

import "./contact.css";

export const Contact = () => {
  return (
    <section className="contact-section style-1 padding-tb" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-12">
            <div className="section-header text-lg-left">
              <h2>
                <span className="d-block">Vous avez une question ?</span>{" "}
                Contactez l'un de nos{" "}
                <span className="theme-color">docteurs</span>
              </h2>
            </div>
            <div className="section-wrapper">
              <form action="action">
                <input type="text" placeholder="Votre nom" />
                <input type="text" placeholder="Votre telephone" />
                <input type="text" placeholder="Type de service" />
                <input type="text" placeholder="dd/mm/yyyy" />
                <input type="text" placeholder="De" />
                <input type="text" placeholder="A" />
                <input type="text" placeholder="Staff" />
                <button type="submit" className="btn btn-success">
                  <span>
                    Verifier la disponibilité{" "}
                    <i className="icofont-rounded-double-right"></i>
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
