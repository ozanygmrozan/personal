import React from "react";

import "./FloatingDiv.css";

const FloatinDiv = ({ img, text1, text2 }) => {
  return (
    <div className="floatingDiv">
      <img src={img} alt="" />
    </div>
  );
};

export default FloatinDiv;
