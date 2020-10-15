import React, { Component } from "react";

// import Button from "react-bootstrap/Button";

import { MenuBar } from "./components/menu-bar/menu-bar";
import { Banner } from "./components/banner/banner";
import { BannerBottom } from "./components/banner-bottom/banner-bottom";
// import { About } from "./components/about/about";
import { Depistage } from "./components/depistage/depistage";
import { Service } from "./components/service/service";
import { Offer } from "./components/offer/offer";
import { Team } from "./components/team/team";
import { Contact } from "./components/contact/contact";
import { Blog } from "./components/blog/blog";
import { Testimonial } from "./components/testimonial/testimonial";
import { Footer } from "./components/footer/footer";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="body-wrap bg-ash">
          <div className="search-input">
            <div className="search-close">
              <i className="icofont-close-circled"></i>
            </div>
            <form>
              <input type="text" name="text" placeholder="Search Here" />
              <button className="search-btn" type="submit">
                <i className="icofont-search-2"></i>
              </button>
            </form>
          </div>
        </div>
        <MenuBar />
        <Banner />
        <BannerBottom />
        <Depistage />
        {/* <About /> */}
        <Offer />
        {/* <Service /> */}

        {/* <Team /> */}
        <Contact />
        {/* <Blog /> */}
        <Testimonial />
        <Footer />
      </div>
    );
  }
}

export default App;
