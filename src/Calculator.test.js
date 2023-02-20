import { render, screen } from "@testing-library/react";
import React from "react";
import Calculator from "./Calculator";

describe("<Calculator />", () => {
  it("shows buttons", () => {
    render(<Calculator />);
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

    buttonValues.forEach((value) => {
      expect(
        screen.getByRole("button", {
          name: value.toString(),
        })
      ).toBeInTheDocument();
    });
  });
});
