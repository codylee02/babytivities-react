import React from "react";
import { Link } from "react-router-dom";
import TokenService from "../../services/token-service";

import "./LandingPageNav.css";

export default function LandingPageNav() {
  let logoutOrLogin = TokenService.hasAuthToken() ? "Logout" : "Login";
  let logoutOrLoginLink = TokenService.hasAuthToken() ? "/" : "/login";

  function handleLogoutClick() {
    TokenService.clearAuthToken();
  }
  return (
    <nav role="navigation" className="LandingPageNav">
      <div className="LandingPageNav__links">
        <Link to="/activities">Activities</Link>
        <Link to={`${logoutOrLoginLink}`} onClick={() => handleLogoutClick()}>
          {logoutOrLogin}
        </Link>
      </div>
    </nav>
  );
}
