import React from "react";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

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
      </header>

      <section>
        <p>[image placeholder of activity w/ baby]</p>
        <p>Browse our comprehensive list of activities</p>
      </section>

      <section>
        <p>[image placeholder list of activities filtering]</p>
        <p>
          Find activities based on age or activity type to promote early
          childhood development.
        </p>
      </section>

      <section>
        <p>[example of favorites list]</p>
        <p>Mark your favorites for playtime later.</p>
      </section>
      <section>
        <h2>Sign Up</h2>
        <RegistrationForm onRegistrationSuccess={handleRegistrationSuccess} />
      </section>
    </div>
  );
}
