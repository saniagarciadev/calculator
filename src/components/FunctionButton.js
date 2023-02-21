import { useContext } from "react";
import { ResultContext } from "../context/resultContext.js";
import "../App.css";

function Button({ operation, index }) {
  const { actions } = useContext(ResultContext);
  const gridAreas = ["plus", "min", "x", "div", "c", "eq"];

  return (
    <button
      onClick={() => actions && actions.operate(operation)}
      className="Button"
      style={{ gridArea: gridAreas[index] }}
    >
      {operation}
    </button>
  );
}

export default Button;
