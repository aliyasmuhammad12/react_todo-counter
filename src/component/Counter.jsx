import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>counter comonent {count}</p>
      <h6>The number is {count%2 === 0 ? "even" : "odd"}</h6>
        <button onClick={() => setCount(count + 1)}>increment </button>
        <button onClick={() => setCount(count - 1)}>decrement</button>
        <button onClick={() => setCount(count * 0)}>reset</button>
    </div>
  );
};

export default Counter;
