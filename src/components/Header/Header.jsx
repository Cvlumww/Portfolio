import React from "react";
import logo from "../../graphics/Logo-v3.svg";

const Header = () => {
  return (
    <div className="Header">
      <img src={logo} alt="Calum Wardrop's Logo" className="Header-Logo" />
    </div>
  );
};

export default Header;
