import { cleanup, render, screen } from "@testing-library/react";
import TestWrapper from "../../TestWrapper";
import OutputPane from "./index";

afterEach(cleanup);

test("Should render a div with correct background color", async () => {
  render(
    <TestWrapper>
      <OutputPane />
    </TestWrapper>
  );
  const element = await screen.findByTestId("outputdiv");

  expect(element.style.backgroundColor).toEqual("rgb(0, 0, 0)");
});
