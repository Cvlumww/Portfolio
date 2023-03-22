import React from "react";
import logo from "../../graphics/logo-me.png";

const Header = () => {
  return (
    <div className="Header">
      <img src={logo} alt="" className="header-logo" />
    </div>
  );
};

export default Header;
