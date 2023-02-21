import "../App.css";

function Button({ name, propFunc }) {
  return (
    <button onClick={() => propFunc(name)} className="Button">
      {name}
    </button>
  );
}

export default Button;
