import React from "react";
import { render } from "@testing-library/react";
import Home from "./Home";

test("renders the Home components textContent", () => {
  const expectedText = "This is the Home page.";

  const { getByTestId } = render(<Home />);
  const homeComponent = getByTestId("home-component");

  expect(homeComponent.textContent).toEqual(expectedText);
});
