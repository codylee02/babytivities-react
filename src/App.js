import React from "react";
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.js";
import Activities from "./routes/Activities/Activities.js";

function App() {
  return (
    <>
      <NavBar />
      <main className="App">
        <Route exact path="/activities" component={Activities} />
      </main>
    </>
  );
}

export default App;
