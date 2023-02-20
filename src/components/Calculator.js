import { useContext } from "react";
import { ResultContext } from "../context/resultContext.js";
import "../App.css";

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// const operations = ["+", "-", "×", "÷"];

function Calculator() {
  const { state, actions } = useContext(ResultContext);
  // console.log(actions);
  return (
    <div className="Calculator">
      <div className="Header">
        <h1>Kcalc</h1>
      </div>
      <input
        type="text"
        value={state ? state.value : 0}
        // placeholder={0}
        className="Display"
      />
      <div className="ButtonSection">
        {numbers.map((num) => (
          <button key={num} className="Button">
            {num}
          </button>
        ))}

        {actions && (
          <>
            <button onClick={actions.add} className="Button">
              +
            </button>
            <button className="Button">-</button>
            <button className="Button">x</button>
            <button className="Button">%</button>
            <button className="Button">C</button>
            <button className="Button">=</button>
          </>
        )}
      </div>
    </div>
  );
}

export default Calculator;
