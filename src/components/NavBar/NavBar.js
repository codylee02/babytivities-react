import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import TokenService from "../../services/token-service";
import BabytivitiesContext from "../../context/BabytivitiesContext";

import "./NavBar.css";

export default class NavBar extends React.Component {
  static contextType = BabytivitiesContext;

  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  toggleMenu() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  closeMenu() {
    this.setState({ isOpen: false });
  }

  handleLogoutClick() {
    TokenService.clearAuthToken();
    this.context.setFavoritesList([]);
  }

  render() {
    let menuClass = this.state.isOpen ? "NavLinks" : "NavLinks closed";
    let logoutOrLogin = TokenService.hasAuthToken() ? "Logout" : "Login";
    let logoutOrLoginLink = TokenService.hasAuthToken() ? "/" : "/login";
    let favoritesLink = TokenService.hasAuthToken() ? "/favorites" : "/login";

    return (
      <nav className="NavBar">
        <FontAwesomeIcon
          icon={faBars}
          className="Hamburger"
          onClick={() => this.toggleMenu()}
        />
        <div className={menuClass}>
          <div className="left">
            <Link to={"/activities"} onClick={() => this.closeMenu()}>
              Activities
            </Link>
            <Link to={`${favoritesLink}`} onClick={() => this.closeMenu()}>
              Favorites
            </Link>
          </div>
          <div className="right">
            <Link to={"/"}>Landing Page </Link>
            <Link
              to={`${logoutOrLoginLink}`}
              onClick={() => this.handleLogoutClick()}
            >
              {logoutOrLogin}
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}
