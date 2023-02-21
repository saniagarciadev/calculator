import { useContext } from "react";
import { ResultContext } from "../context/resultContext.js";
import "../App.css";

function Button({ name }) {
  const { actions } = useContext(ResultContext);
  return (
    <button
      onClick={() => {
        actions && actions.concat(name.toString());
      }}
      className="Button"
    >
      {name}
    </button>
  );
}

export default Button;
