import React from "react";

import "./contact.css";

export const Contact = () => {
  return (
    <section className="contact-section style-1 padding-tb">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-12">
            <div className="section-header text-lg-left">
              <h2>
                <span className="d-block">Have A Questions?</span> Chat With{" "}
                <span className="theme-color">Professional Doctor</span>
              </h2>
            </div>
            <div className="section-wrapper">
              <form action="action">
                <input type="text" placeholder="Your Name" />
                <input type="text" placeholder="Your Phone" />
                <input type="text" placeholder="Type of Service" />
                <input type="text" placeholder="dd/mm/yyyy" />
                <input type="text" placeholder="From" />
                <input type="text" placeholder="To" />
                <input type="text" placeholder="Staff" />
                <button type="submit" className="lab-btn">
                  <span>
                    Check Availability{" "}
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
