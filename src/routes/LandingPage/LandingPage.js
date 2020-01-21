import React from "react";

import "./LandingPage.css";

export default function LandingPage() {
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
        <form className="sign-up-form">
          First Name: <input type="text" name="first-name" />
          Last Name: <input type="text" name="last-name" />
          Email: <input type="email" name="email" />
          Password: <input type="password" name="password" />
          Confirm Password: <input type="password" name="confirm-password" />
          <input type="submit" value="Sign Up" />
        </form>
      </section>
    </div>
  );
}
