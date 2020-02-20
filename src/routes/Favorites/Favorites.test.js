import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import Favorites from "./Favorites";

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <BrowserRouter>
      <Favorites />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
