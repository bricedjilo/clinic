import React from "react";

import blog01 from "./images/01.jpg";
import blog02 from "./images/02.jpg";
import blog03 from "./images/03.jpg";
import blog04 from "./images/04.jpg";

import "./blog.css";

export const Blog = () => {
  return (
    <section className="blog-section relative style-1 padding-tb">
      <div className="pattan-shape"></div>
      <div className="container">
        <div className="section-header">
          <h2>
            <span className="d-block">News Feed Be</span> The First To Our{" "}
            <span className="theme-color">New Stories</span>{" "}
          </h2>
        </div>
        <div className="section-wrapper">
          <div className="row no-gutters">
            <div className="col-lg-6 col-12">
              <div className="post-item style-1">
                <div className="post-inner">
                  <div className="post-thumb">
                    <a href="blog-single.html">
                      <img src={blog01} alt="blog" />
                    </a>
                  </div>
                  <div className="post-content">
                    <div className="meta-post">
                      <div className="meta-icon">
                        <i className="icofont-film"></i>
                      </div>
                      {/* eslint-disable-next-line */}
                      <a href="#" className="date">
                        01 May'20
                      </a>
                      {/* eslint-disable-next-line */}
                      <a href="#" className="name">
                        John Doe
                      </a>
                      {/* eslint-disable-next-line */}
                      <a href="#" className="comments">
                        1 Comments
                      </a>
                    </div>
                    <div className="main-content">
                      <h4>
                        <a href="blog-single.html">
                          Business Ueporting Rouncil Them Good Could Plan
                        </a>
                      </h4>
                      <p>
                        Nam nec tellus a odio tincidunt auctor a ornare odio.
                        Sed mauris vitae erat consequat auctor euin elitin Class
                        ptent inceptos himenaeos. Mauris in erat justo.
                      </p>
                      <a href="blog-single.html" className="lab-btn">
                        <span>
                          Read More <i className="icofont-double-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="post-item style-1">
                <div className="post-inner">
                  <div className="post-thumb">
                    <a href="blog-single.html">
                      <img src={blog02} alt="blog" />
                    </a>
                  </div>
                  <div className="post-content">
                    <div className="meta-post">
                      <div className="meta-icon">
                        <i className="icofont-film"></i>
                      </div>
                      <a href="#" className="date">
                        01 May'20
                      </a>
                      <a href="#" className="name">
                        John Doe
                      </a>
                      <a href="#" className="comments">
                        1 Comments
                      </a>
                    </div>
                    <div className="main-content">
                      <h4>
                        <a href="blog-single.html">
                          Financial Reporting Qouncil What Why Could More
                        </a>
                      </h4>
                      <p>
                        Nam nec tellus a odio tincidunt auctor a ornare odio.
                        Sed mauris vitae erat consequat auctor euin elitin Class
                        ptent inceptos himenaeos. Mauris in erat justo.
                      </p>
                      <a href="blog-single.html" className="lab-btn">
                        <span>
                          Read More <i className="icofont-double-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="post-item style-1">
                <div className="post-inner">
                  <div className="post-thumb">
                    <a href="blog-single.html">
                      <img src={blog03} alt="blog" />
                    </a>
                  </div>
                  <div className="post-content">
                    <div className="meta-post">
                      <div className="meta-icon">
                        <i className="icofont-film"></i>
                      </div>
                      <a href="#" className="date">
                        01 May'20
                      </a>
                      <a href="#" className="name">
                        John Doe
                      </a>
                      <a href="#" className="comments">
                        1 Comments
                      </a>
                    </div>
                    <div className="main-content">
                      <h4>
                        <a href="blog-single.html">
                          Conulting Reporting Qouncil Arei Not Could More
                        </a>
                      </h4>
                      <p>
                        Nam nec tellus a odio tincidunt auctor a ornare odio.
                        Sed mauris vitae erat consequat auctor euin elitin Class
                        ptent inceptos himenaeos. Mauris in erat justo.
                      </p>
                      <a href="blog-single.html" className="lab-btn">
                        <span>
                          Read More <i className="icofont-double-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="post-item style-1">
                <div className="post-inner">
                  <div className="post-thumb">
                    <a href="blog-single.html">
                      <img src={blog04} alt="blog" />
                    </a>
                  </div>
                  <div className="post-content">
                    <div className="meta-post">
                      <div className="meta-icon">
                        <i className="icofont-film"></i>
                      </div>
                      <a href="#" className="date">
                        01 May'20
                      </a>
                      <a href="#" className="name">
                        John Doe
                      </a>
                      <a href="#" className="comments">
                        1 Comments
                      </a>
                    </div>
                    <div className="main-content">
                      <h4>
                        <a href="blog-single.html">
                          Ueporting Business Rouncil Them Good Could Plan
                        </a>
                      </h4>
                      <p>
                        Nam nec tellus a odio tincidunt auctor a ornare odio.
                        Sed mauris vitae erat consequat auctor euin elitin Class
                        ptent inceptos himenaeos. Mauris in erat justo.
                      </p>
                      <a href="blog-single.html" className="lab-btn">
                        <span>
                          Read More <i className="icofont-double-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <a href="blog.html" className="lab-btn">
              <span>
                view all blog page <i className="icofont-double-right"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
