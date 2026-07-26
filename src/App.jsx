import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handelIncrement = () => {
    if (count < 20) {
      setCount((prev) => prev + 1);
    } else {
      alert("Maximum Reached");
    }
  };
  const handelDecrement = () => {
    if (count > 0) return setCount((prev) => prev - 1);
  };
  const handelReset = () => {
    setCount(0);
  };

  const even = count % 2 === 0;
  return (
    <>
      <h1>Count: {count}</h1>

      <p>{count > 10 ? "High Count" : "Normal Count"}</p>
      <p>{even ? "Even" : "Odd"}</p>

      <button onClick={handelIncrement} disabled={count === 20}>
        +
      </button>
      <button onClick={handelDecrement} disabled={count === 0}>
        -
      </button>
      <button onClick={handelReset} disabled={count === 0}>
        Reset
      </button>
    </>
  );
}

export default App;
