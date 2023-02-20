import "./App.css";
import { ResultProvider } from "./context/resultContext";
import Calculator from "./Calculator";

function App() {
  return (
    <ResultProvider>
      <div className="App">
        <Calculator />
      </div>
    </ResultProvider>
  );
}

export default App;
