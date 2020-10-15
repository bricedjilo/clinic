import React from "react";

import testimonial01jpg from "./images/01.jpg";
import testimonial01png from "./images/01.png";
// import testimonialShape01 from "./images/shape/01.png";
// import testimonialShape02 from "./images/shape/02.png";

import "./testimonial.css";

export const Testimonial = (props) => {
  return (
    <div className="testimonial-section bg-ash">
      <div className="container">
        <div className="section-wrapper">
          <div className="row align-items-center">
            <div className="col-lg-7 col-12">
              <div className="testimonial-slider">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="testimonial-item">
                      <div className="testimonial-inner">
                        <div className="testimonial-thumb">
                          <img src={testimonial01jpg} alt="testimonial" />
                          <span className="quate">
                            <i className="icofont-quote-left"></i>
                          </span>
                        </div>
                        <div className="testimonial-content">
                          <p>
                            Holisticly producze full tested relaonships rather
                            next genration mindshare Compel producate extensve
                            and flexibley imperative holisticly producze full
                            tested relaonships rather next genration mindshare
                            Compel producate extensve and flexibley imperative
                            and Seamless for best medical client focused
                            process.
                          </p>
                          <h6>
                            Tom Lathin <span>- Heart Patient</span>
                          </h6>
                          <div className="ratting">
                            <i className="icofont-ui-rating"></i>
                            <i className="icofont-ui-rating"></i>
                            <i className="icofont-ui-rating"></i>
                            <i className="icofont-ui-rating"></i>
                            <i className="icofont-ui-rating"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="testimonial-abs-thumb">
                <img src={testimonial01png} alt="testimonial" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
