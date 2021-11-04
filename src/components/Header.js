import React from "react";
import logo from "../Octocat.png";

const Header = () => {
  return (
    <div className="header">
      <div className="image">
        <img src={logo} alt="" width="200" />
      </div>
      <h1>GitHub Profile Finder</h1>
    </div>
  );
};

export default Header;
