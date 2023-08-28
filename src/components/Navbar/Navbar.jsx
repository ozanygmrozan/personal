import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
const navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      <div className="n-left">
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Anasayfa
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                Biz kimiz
              </Link>
            </li>
            <li>
              <Link to="works" spy={true} smooth={true}>
                Hizmetlerimiz
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                Hakkımızda
              </Link>
            </li>
            <li>
              <Link to="testimonial" spy={true} smooth={true}>
                Projelerimiz
              </Link>
            </li>
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true}>
          <button className="button n-button">İltişim</button>
        </Link>
      </div>
    </div>
  );
};

export default navbar;
