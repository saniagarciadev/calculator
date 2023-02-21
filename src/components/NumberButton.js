import { useContext } from "react";
import { ResultContext } from "../context/resultContext.js";
import "../App.css";

function Button({ name, handleClick }) {
  return (
    <button onClick={handleClick} className="Button">
      {name}
    </button>
  );
}

export default Button;
