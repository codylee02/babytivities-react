import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import ActivityFilter from "./ActivityFilter";

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <BrowserRouter>
      <ActivityFilter />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
