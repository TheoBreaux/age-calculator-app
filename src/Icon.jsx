import React from "react";
import Logo from "../images/icon-arrow.svg";
import "./Icon.css";

const Icon = () => {
  return (
    <div className="logo">
      <img className="icon" src={Logo} alt="icon image" />
    </div>

  );
};

export default Icon;
