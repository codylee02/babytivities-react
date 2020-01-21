import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import "./NavBar.css";

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  toggleMenu() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    let menuClass = this.state.isOpen ? "NavLinks" : "NavLinks-closed";
    return (
      <nav className="NavBar">
        <FontAwesomeIcon
          icon={faBars}
          className="Hamburger"
          onClick={() => this.toggleMenu()}
        />

        <div className={menuClass}>
          <Link to={"/activities"} onClick={() => this.toggleMenu()}>
            Activities
          </Link>
          <Link to={"/favorites"} onClick={() => this.toggleMenu()}>
            Favorites
          </Link>
          <Link to={"/"} onClick={() => this.toggleMenu()}>
            Logout
          </Link>
        </div>
      </nav>
    );
  }
}
