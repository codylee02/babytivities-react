import React from "react";
import { Section } from "../../Utils/Utils";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

import "./RegistrationPage.css";
export default function RegistrationPage(props) {
  function handleRegistrationSuccess(user) {
    const { history } = props;
    history.push("/login");
  }

  function handleRegistrationCancel() {
    const { history } = props;
    history.push("/");
  }

  return (
    <Section className="RegistrationPage">
      <h2>Sign Up</h2>
      <RegistrationForm
        onRegistrationCancel={handleRegistrationCancel}
        onRegistrationSuccess={handleRegistrationSuccess}
      />
    </Section>
  );
}

RegistrationPage.defaultProps = {
  history: {
    push: () => {}
  }
};
