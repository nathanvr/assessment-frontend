import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/NavBar.scss";

function NavBar() {
  return (
    <div className="navBar">
      <div className="navBar__home">
        <Link to="/home">
          <span>Home</span>
        </Link>
      </div>
      <div className="navBar__About">
        <Link to="/About">
          <span>About me</span>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
