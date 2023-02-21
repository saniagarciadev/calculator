import React, { useReducer, createContext } from "react";
const initialState = {
  value: "0",
  prevValue: "0",
  calc: null,
};
export const ResultContext = createContext(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case "concat":
      return {
        ...state,
        value: state.value === "0" ? action.value : state.value + action.value,
      };
    case "store":
      return {
        value: "0",
        prevValue: state.value,
        calc: action.value,
      };
    case "reset":
      return initialState;
    case "resolve":
      const result = eval(
        Number(state.prevValue) + state.calc + Number(state.value)
      );
      return {
        ...initialState,
        value: result,
      };
    default:
      return state;
  }
};
export const ResultProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const concat = (value) => {
    dispatch({ type: "concat", value });
  };
  const operate = (operation) => {
    if (operation === "=") {
      return dispatch({ type: "resolve" });
    }
    if (operation === "C") {
      return dispatch({ type: "reset" });
    }
    dispatch({ type: "store", value: operation });
  };

  const actions = { concat, operate };

  const contextValue = { state, actions };
  return (
    <ResultContext.Provider value={contextValue}>
      {children}
    </ResultContext.Provider>
  );
};
