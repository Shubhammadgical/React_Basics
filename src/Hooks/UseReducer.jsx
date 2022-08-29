import React, { useReducer } from "react";
const initialState = 0;
//alternative of useState
const reducer = (state, action) => {
  if (action.type === "INCREMENT") {
    state++;
  } else {
    state--;
  }
  return state;
};
function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>
        It is a function which takes state and action. It is used in big
        applications and for mutiple state management.
      </h2>
      <h1>{state}</h1>
      <button onClick={() => dispatch({ type: "DECREMENT" })}> - </button>
      <button onClick={() => dispatch({ type: "INCREMENT" })}> + </button>
    </div>
  );
}

export default UseReducer;
