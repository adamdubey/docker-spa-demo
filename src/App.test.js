import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import App from "./App";

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});

test("renders project repo link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/project repo/i);
  expect(linkElement).toBeInTheDocument();
});
