import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import Calculator from "./Calculator";

const buttonValues = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
  // "+",
  // "-",
  // "x",
  // "%",
  // "C",
  // "=",
];

describe("<Calculator />", () => {
  it("renders buttons", async () => {
    render(<Calculator />);
    buttonValues.forEach((value) => {
      const button = screen.getByRole("button", {
        name: value.toString(),
      });
      expect(button).toBeInTheDocument();
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
  // it.only("adds numbers to the current value", async () => {
  //   render(<Calculator />);
  //   const display = screen.getByRole("textbox");
  //   expect(display.value).toEqual("0");
  //   const buttonOne = await screen.findByRole("button", {
  //     name: "1",
  //   });
  //   buttonOne.click();
  //   // buttonOne.click();
  //   console.log(display.value);
  //   // expect(display.value).toEqual("11");
  // });
  // it("adds unit with plus button", async () => {
  //   render(<Calculator />);
  //   await waitFor(() => {
  //     expect(
  //       screen.getByRole("button", {
  //         name: "+",
  //       })
  //     ).toBeInTheDocument();
  //   });
  //   // const plusButton = await screen.findByRole("button", {
  //   //   name: "+",
  //   // });
  //   // plusButton.click();
  //   // screen.getByRole("textbox", {
  //   //   name: /1/i,
  //   // });
  // });
});
