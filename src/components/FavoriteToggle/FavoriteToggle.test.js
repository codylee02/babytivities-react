import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import FavoriteToggle from "./FavoriteToggle";

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <BrowserRouter>
      <FavoriteToggle />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
