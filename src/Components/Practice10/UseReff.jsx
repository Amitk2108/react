import { useState, useRef } from "react";

const UseReff = () => {
  const [count11, setCount11] = useState(10);
  let ref = useRef(null);

  const start = () => {
    if (ref.current !== null) {
      return;
    }
    ref.current = setInterval(() => {
      setCount11((prevCount1) => {
        if (prevCount1 <= 1) {
          clearInterval(ref.current);
          return 0;
        }
        return prevCount1 - 1;
      });
    }, 1000);
  };
  const stop = () => {
    clearInterval(ref.current);
    ref.current = null;
  };

  const reset = () => {
    setCount11(0);
    stop();
    ref.current = null;
  };

  return (
    <div>
      <h1>Using useRef </h1>
      <h1>Time:{count11}</h1>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default UseReff;
