import { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);

  const addFun = () => {
    setCount(count + 1);
  };
  const subFun = () => {
    setCount(count - 1);
  };
  const resetFun = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>Count is {count}</h1>
      <button onClick={addFun}>Add</button>
      <button disabled={count < 1} onClick={subFun}>
        Sub
      </button>
      <button onClick={resetFun}>Reset</button>
    </div>
  );
};

export default Counter;
