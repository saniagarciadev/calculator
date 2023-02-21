import { useContext } from "react";
import { ResultContext } from "../context/resultContext.js";
import NumberButton from "./NumberButton";
import FunctionButton from "./FunctionButton";
import "../App.css";

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const operations = [
  "add",
  "substract",
  "multiply",
  "divide",
  "reset",
  "calculate",
];
const symbols = ["+", "-", "x", "%", "C", "="];

function Calculator() {
  const { state, actions } = useContext(ResultContext);
  return (
    <div className="Calculator">
      <div className="Header">
        <h1>Kcalc</h1>
      </div>
      <input
        type="text"
        value={state ? state.value : 0}
        onChange={() => {
          console.log(state.value);
        }}
        className="Display"
      />
      <div className="ButtonSection">
        {numbers.map((num) => (
          <NumberButton
            key={num}
            name={num}
            handleClick={() => actions.concat(num.toString())}
          />
        ))}
        {/* {operations.map((op, i) => (
          <FunctionButton key={i} operation={op} symbol={symbols[i]} />
        ))} */}
      </div>
    </div>
  );
}

export default Calculator;
