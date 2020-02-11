import React from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import { Section } from "../../Utils/Utils";

import "./LoginPage.css";

export default class LoginPage extends React.Component {
  handleLoginSuccess = () => {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || "/activities";
    history.push(destination);
  };
  render() {
    return (
      <Section className="LoginPage">
        <h2>Login</h2>
        <LoginForm onLoginSuccess={this.handleLoginSuccess} />
      </Section>
    );
  }
}

LoginPage.defaultProps = {
  location: {},
  history: {
    push: () => {}
  }
};
