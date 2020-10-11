import React from "react";

import logoRc from "./images/logo-rc.png";

import "./header.css";

export const Header = (props) => {
  return (
    <header className="header-section bg-ash">
      <div className="header-area">
        <div className="container">
          <div className="primary-menu">
            <div className="logo py-2">
              <a href="index.html">
                <img
                  src={logoRc}
                  alt="logo"
                  style={{ display: "inline-block" }}
                />
                <span style={{ display: "inline-block" }} className="org-name">
                  Royal Clinic
                </span>
              </a>
            </div>
            <div className="menu-bar d-lg-none">
              <i className="icofont-navigation-menu"></i>
            </div>
            <div className="main-area">
              <div className="main-menu d-flex flex-wrap align-items-center justify-content-center w-100">
                <ul className="lab-ul">
                  <li className="active">
                    <a href="#0">Home</a>
                    <ul className="lab-ul">
                      <li className="active">
                        <a href="index.html">Home Page One</a>
                      </li>
                      <li>
                        <a href="index-2.html">Home Page Two</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="about.html">About</a>
                  </li>
                  <li>
                    <a href="#0">Pages</a>
                    <ul className="lab-ul">
                      <li>
                        <a href="#0">Services</a>
                        <ul className="lab-ul">
                          <li>
                            <a href="service.html">Service</a>
                          </li>
                          <li>
                            <a href="service-single.html">Service Single</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#0">Portfolios</a>
                        <ul className="lab-ul">
                          <li>
                            <a href="portfolio.html">Portfolio style 1</a>
                          </li>
                          <li>
                            <a href="portfolio-2.html">Portfolio style 2</a>
                          </li>
                          <li>
                            <a href="portfolio-single.html">
                              Portfolio style 3
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="team.html">Team Membar</a>
                      </li>
                      <li>
                        <a href="timetable.html">Time Table</a>
                      </li>
                      <li>
                        <a href="history.html">History Page</a>
                      </li>
                      <li>
                        <a href="404.html">404 Page</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#0">Blog</a>
                    <ul className="lab-ul">
                      <li>
                        <a href="blog.html">Blog Style 1</a>
                      </li>
                      <li>
                        <a href="blog-2.html">Blog style 2</a>
                      </li>
                      <li>
                        <a href="blog-3.html">Blog style 3</a>
                      </li>
                      <li>
                        <a href="blog-single.html">Blog Details</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#0">Shop</a>
                    <ul className="lab-ul">
                      <li>
                        <a href="shop.html">Products Page</a>
                      </li>
                      <li>
                        <a href="shop-single.html">Products Details</a>
                      </li>
                      <li>
                        <a href="cart-page.html">Cart Page</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                </ul>
                {/* <ul className="lab-ul search-cart">
                  <li>
                    <div className="search-option">
                      <div className="icon icon-search">
                        <i className="icofont-search-2"></i>
                      </div>
                    </div>
                  </li> */}
                {/* <li>
                    <div className="cart-option">
                      <div className="icon icon-check">
                        <i className="icofont-cart-alt"></i>
                      </div>
                      <span className="count-item">2</span>
                      <div className="cart-content">
                        <div className="cart-item">
                          <div className="cart-img">
                            <img src="assets/images/shop/01.jpg" alt="cart" />
                          </div>
                          <div className="cart-des">
                            <a href="">Product Title Hore</a>
                            <p>$20.00</p>
                          </div>
                          <div className="cart-btn">
                            <a href="#">
                              <i className="icofont-close-circled"></i>
                            </a>
                          </div>
                        </div>
                        <div className="cart-item">
                          <div className="cart-img">
                            <img src="assets/images/shop/02.jpg" alt="cart" />
                          </div>
                          <div className="cart-des">
                            <a href="#">Product Title Hore</a>
                            <p>$20.00</p>
                          </div>
                          <div className="cart-btn">
                            <a href="#">
                              <i className="icofont-close-circled"></i>
                            </a>
                          </div>
                        </div>
                        <div className="cart-bottom">
                          <div className="cart-subtotal">
                            <p>
                              Total: <b className="float-right">$40.00</b>
                            </p>
                          </div>
                          <div className="cart-action">
                            <a href="#" className="lab-btn">
                              <span>View Cart</span>
                            </a>
                            <a href="#" className="lab-btn">
                              <span>Check Out</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li> */}
                {/* </ul> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
