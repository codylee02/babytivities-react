import React from "react";
import { Link } from "react-router-dom";

import "./LandingPageNav.css";

export default function LandingPageNav() {
  return (
    <nav role="navigation" className="LandingPageNav">
      {/* <Link to="/register">Register</Link> */}
      <Link to="/activities">Activities</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
}
