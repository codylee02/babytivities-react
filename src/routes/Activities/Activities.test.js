import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import Activities from "./Activities";

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <BrowserRouter>
      <Activities />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
