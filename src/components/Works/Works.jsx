import React, { useContext } from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Works = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="works" id="works">
      <div className="w-left">
        <div className="awesome">
          <span style={{ color: darkMode ? "white" : "" }}>
            En İyi Kaliteyi Sunuyoruz
          </span>
          <span>Hizmetler</span>
          <spane>
            Global yazılım çözümleri sağlayan bir şirket olarak, 2 yıldan fazla
            tecrübemizle hizmetinizdeyiz.
            <br />
            Global yazılım çözümleri sağlayan bir şirket olarak, 2 yıldan fazla
            tecrübemizle hizmetinizdeyiz.
            <br />
            Global yazılım çözümleri sağlayan bir şirket olarak, 2 yıldan fazla
            tecrübemizle hizmetinizdeyiz.
            <br />
            Global yazılım çözümleri sağlayan bir şirket olarak, 2 yıldan fazla
            tecrübemizle hizmetinizdeyiz.
          </spane>

          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        ></motion.div>
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
