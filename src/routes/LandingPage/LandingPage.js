import React from "react";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBaby } from "@fortawesome/free-solid-svg-icons";

import "./LandingPage.css";

export default function LandingPage(props) {
  function handleRegistrationSuccess(user) {
    const { history } = props;
    history.push("/login");
  }
  return (
    <div>
      <header role="banner">
        <h1>Babytivities</h1>
        <h2>Fun activities you can do at home with your child.</h2>
        <div className="LandingPage__icon">
          <FontAwesomeIcon icon={faBaby} color="#5401ff" />
        </div>
        <h3>Try out the demo account:</h3>
        <p>Username: demo-user-account@demo.com</p>
        <p>Password: Password123!</p>
      </header>
      <div className="LandingPage__app-info-container">
        <section>
          <img
            className="LandingPage__img"
            src={require("./images/activities.png")}
            alt="activities example"
          ></img>
          <p>Browse our comprehensive list of activities</p>
        </section>

        <section>
          <img
            className="LandingPage__img"
            src={require("./images/filters.png")}
            alt="filters example"
          ></img>
          <p>
            Find activities based on age or activity type to promote early
            childhood development.
          </p>
        </section>

        <section>
          <img
            className="LandingPage__img"
            src={require("./images/favorites.png")}
            alt="templates example"
          ></img>
          <p>Mark your favorites for playtime later.</p>
        </section>
      </div>
      <section className="RegistrationPage" id="register">
        <h2>Sign Up</h2>
        <RegistrationForm onRegistrationSuccess={handleRegistrationSuccess} />
      </section>
    </div>
  );
}
