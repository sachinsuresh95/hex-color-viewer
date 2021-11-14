import { cleanup, render, fireEvent, screen } from "@testing-library/react";
import InputPane from ".";
import TestWrapper from "../../TestWrapper";

afterEach(cleanup);

test("render input with default value", () => {
  const { container } = render(
    <TestWrapper>
      <InputPane />
    </TestWrapper>
  );

  const input = container.querySelector("input");

  expect(input).toHaveValue("000000");
});

test("should have button enabled when value is valid", () => {
  const { container } = render(
    <TestWrapper>
      <InputPane />
    </TestWrapper>
  );

  const input = container.getElementsByTagName("input");
  const button = container.querySelector("button");

  expect(button).toBeEnabled();

  fireEvent.change(input[0], { target: { value: "abcd" } });

  expect(button).toBeDisabled();
});

test("should show error when value is invalid", () => {
  const { container } = render(
    <TestWrapper>
      <InputPane />
    </TestWrapper>
  );

  const input = container.getElementsByTagName("input");
  const error = container.querySelector(".error-msg");

  expect(error).toHaveTextContent("");

  fireEvent.change(input[0], { target: { value: "abcd" } });

  expect(error).toHaveTextContent("Please enter valid HEX value");
});
