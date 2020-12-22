import React from "react";
import { render } from "@testing-library/react";
import Footer from "./Footer";

test("renders the Footer component` textContent", () => {
  const expectedText = "Copyright © 2020: Joshua Gardiner ";

  const { getByTestId } = render(<Footer />);
  const footerComponent = getByTestId("footer-component");

  expect(footerComponent.textContent).toEqual(expectedText);
});
