import React, { useReducer, createContext } from "react";
const initialState = {
  value: 0,
};
export const ResultContext = createContext(initialState);
export const ACTIONS = {
  ADD: "increase",
  SUBSTRACT: "decrease",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD:
      return {
        value: state.value + 1,
      };
    case ACTIONS.SUBSTRACT:
      return {
        value: state.value - 1,
      };
    default:
      return state;
  }
};
export const ResultProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const add = () => dispatch({ type: ACTIONS.ADD });
  const substract = () => dispatch({ type: ACTIONS.DECREASE });

  const actions = { add, substract };

  const contextValue = { state, actions };
  return (
    <ResultContext.Provider value={contextValue}>
      {children}
    </ResultContext.Provider>
  );
};
