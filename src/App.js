import React from "react";
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.js";
import Activities from "./routes/Activities/Activities.js";
import Activity from "./routes/Activity/Activity.js";
import Favorites from "./routes/Favorites/Favorites";
import LandingPage from "./routes/LandingPage/LandingPage";
import LandingPageNav from "./components/LandingPageNav/LandingPageNav";
import LoginPage from "./routes/LoginPage/LoginPage";
import RegistrationPage from "./routes/RegistrationPage/RegistrationPage";

function App() {
  return (
    <>
      <Route exact path={"/"} component={LandingPageNav} />
      <Route
        exact
        path={["/activities", "/favorites", "/activities/:id"]}
        component={NavBar}
      />

      <main className="App">
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/activities" component={Activities} />
        <Route exact path="/favorites" component={Favorites} />
        <Route path="/activities/:id" component={Activity} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegistrationPage} />
      </main>
    </>
  );
}

export default App;
