import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders calculator", () => {
  render(<App />);
  const calculatorElement = screen.getByText(/Kcalc/i);
  expect(calculatorElement).toBeInTheDocument();
});
