import { useContext, useEffect, useState } from "react";
import { ResultContext } from "../context/resultContext.js";
import NumberButton from "./NumberButton";
import FunctionButton from "./FunctionButton";
import "../App.css";

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "."];
const operations = ["+", "-", "*", "/", "C", "="];

function Calculator() {
  const { state } = useContext(ResultContext);

  return (
    <div className="Calculator">
      <div className="Header">
        <h1>Kcalc</h1>
      </div>
      <div className="Display">
        <span>
          {state &&
            state.prevValue !== "0" &&
            state.prevValue + " " + state.calc}
        </span>
        <input
          type="text"
          value={state ? state.value : 0}
          onChange={() => {
            console.log(state.value);
          }}
        />
      </div>
      <div className="ButtonSection">
        {numbers.map((num) => (
          <NumberButton key={num} name={num} />
        ))}
        {operations.map((op, i) => (
          <FunctionButton key={i} index={i} operation={op} />
        ))}
      </div>
    </div>
  );
}

export default Calculator;
