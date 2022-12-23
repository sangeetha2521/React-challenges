import React, { useState } from "react";

const Counter = () => {
  const [increment, setIncrement] = useState(0);

  return (
    <div>
      <h2> {increment}</h2>
      <button onClick={() => setIncrement(increment + 1)}>Increment</button>

      <button onClick={() => setIncrement(increment - 1)}>decrement</button>
    </div>
  );
};
export default Counter;
