import { useContext } from "react";
import { ResultContext } from "../context/resultContext.js";
import "../App.css";

function Button({ operation }) {
  const { actions } = useContext(ResultContext);

  return (
    <button
      onClick={() => actions && actions.operate(operation)}
      className="Button"
    >
      {operation}
    </button>
  );
}

export default Button;
