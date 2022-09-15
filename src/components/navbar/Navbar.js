import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="brand-logo">
        <Link to="/">
          <span>FerroFlicks</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
