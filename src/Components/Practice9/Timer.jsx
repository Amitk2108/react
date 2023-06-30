import { useState, useEffect } from "react";

const Timer = () => {
  const [count10, setCount10] = useState(10);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount10((prevCount1) => {
        if (prevCount1 <= 1) {
          clearInterval(intervalId);
          return 0;
        }
        return prevCount1 - 1;
      });
    }, 1000);

    const cleanup = () => {
      clearInterval(intervalId);
    };
    return cleanup;
  }, []);

//   console.log(count10);

  return (
    <div>
      <h1>Using useEffect</h1>
      <h1>Count:{count10}</h1>
    </div>
  );
};

export default Timer;
