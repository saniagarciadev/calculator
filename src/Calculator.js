import { useContext } from "react";
import { ResultContext } from "./context/resultContext.js";
import "./App.css";

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const operations = ["+", "-", "×", "÷"];

function Calculator() {
  const { state } = useContext(ResultContext);

  return (
    <div className="Calculator">
      <div className="Header">
        <h1>Kcalc</h1>
      </div>
      <h2 className="Display">{state ? state.value : 0}</h2>
      <div className="ButtonSection">
        {numbers.map((num) => (
          <button key={num} className="Button">
            {num}
          </button>
        ))}
        {operations.map((op, i) => (
          <button key={i} className="Button">
            {op}
          </button>
        ))}
        <button className="Button">C</button>
        <button className="Button">=</button>
      </div>
    </div>
  );
}

export default Calculator;