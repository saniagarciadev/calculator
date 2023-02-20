import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import Calculator from "./Calculator";

const buttonValues = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "+",
  "-",
  "×",
  "÷",
  "C",
  "=",
];

describe("<Calculator />", () => {
  it("shows buttons", async () => {
    render(<Calculator />);
    buttonValues.forEach(async (value) => {
      await waitFor(() => {
        expect(
          screen.getByRole("button", {
            name: value.toString(),
          })
        ).toBeInTheDocument();
      });
    });
  });
  it("shows starting value", async () => {
    render(<Calculator />);
    await waitFor(() => {
      expect(
        screen.getByRole("textbox", {
          value: 0,
        })
      ).toBeInTheDocument();
    });
  });
  it.only("adds unit with plus button", async () => {
    render(<Calculator />);
    const plusButton = await screen.findByRole("button", {
      name: "+",
    });
    plusButton.click();
    screen.getByRole("heading", {
      name: /1/i,
    });
  });
});
