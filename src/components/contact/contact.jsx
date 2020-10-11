import React from "react";

import "./contact.css";

export const Contact = () => {
  return (
    <section class="contact-section style-1 padding-tb">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-12">
            <div class="section-header text-lg-left">
              <h2>
                <span class="d-block">Have A Questions?</span> Chat With{" "}
                <span class="theme-color">Professional Doctor</span>
              </h2>
            </div>
            <div class="section-wrapper">
              <form action="action">
                <input type="text" placeholder="Your Name" />
                <input type="text" placeholder="Your Phone" />
                <input type="text" placeholder="Type of Service" />
                <input type="text" placeholder="dd/mm/yyyy" />
                <input type="text" placeholder="From" />
                <input type="text" placeholder="To" />
                <input type="text" placeholder="Staff" />
                <button type="submit" class="lab-btn">
                  <span>
                    Check Availability{" "}
                    <i class="icofont-rounded-double-right"></i>
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
