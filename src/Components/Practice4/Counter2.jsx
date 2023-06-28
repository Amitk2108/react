import { useReducer } from "react";

const initialState = {
  count: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return {
        ...state,
        count: state.count + 1,
      };
    case "sub":
      return {
        ...state,
        count: state.count - 1,
      };
    case "reset":
      return {
        ...state,
        count: (state.count = 0),
      };

    default:
      return state;
  }
};

const CounterRedux = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Count is {state.count}</h1>
      <button onClick={() => dispatch({ type: "add" })}>Add</button>
      <button
        disabled={state.count < 1}
        onClick={() => dispatch({ type: "sub" })}
      >
        Sub
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default CounterRedux;
