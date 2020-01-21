import React from "react";
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.js";
import Activities from "./routes/Activities/Activities.js";
import Activity from "./routes/Activity/Activity.js";
import Favorites from "./routes/Favorites/Favorites";

function App() {
  return (
    <>
      <NavBar />
      <main className="App">
        <Route exact path="/activities" component={Activities} />
        <Route exact path="/favorites" component={Favorites} />
        <Route path="/activities/:id" component={Activity} />
      </main>
    </>
  );
}

export default App;
