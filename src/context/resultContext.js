import React, { useReducer, createContext, useMemo } from "react";
const initialState = {
  value: 0,
};
export const ResultContext = createContext(initialState);
export const ACTIONS = {
  INCREASE: "increase",
  DECREASE: "decrease",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INCREASE:
      return {
        value: state.value + 1,
      };
    case ACTIONS.DECREASE:
      return {
        value: state.value - 1,
      };
    default:
      return state;
  }
};
export const ResultProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // (**)
  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);
  return (
    <ResultContext.Provider value={contextValue}>
      {children}
    </ResultContext.Provider>
  );
};
