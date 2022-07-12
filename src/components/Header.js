import React from "react";
import "../css/header.css";
import logo from "../assets/base/logo.svg";

const Header = () => {
  return (
    <div className="header-container" id="header" data-index="1">
      <div className="header_title-container">
        <h1 className="header_title">
          <span>Leandro </span>
          <span>Pereyra</span>
        </h1>
        <div className="header_lines-container">
          <div className="header_lines-container_firstLine"></div>
          <div className="header_lines-container_secondLine"></div>
        </div>
        <h3 className="header_subtitle">desarrollador web</h3>
      </div>
      <div className="header_image-container">
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default Header;
