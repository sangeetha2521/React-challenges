import React, { useState } from "react";

const Sum = () => {
  const [num, setNum] = useState();
  const [number2, setNumber2] = useState();
  const [total, setTotal] = useState(0);
  const handleOnclick = () => {
    setTotal(num + number2);
  };
  const functionMinus = () => {
    setTotal(num - number2);
  };
  const functionMultiply = () => {
    setTotal(num * number2);
  };
  const functionDevide = () => {
    setTotal(num / number2);
  };
  return (
    <div>
      Calculator
      <input
        type="text"
        placeholder="Enter your 1st number"
        value={num}
        onChange={(e) => setNum(+e.target.value)}
      ></input>
      <input
        type="text"
        placeholder="Enter your 2nd number"
        value={number2}
        onChange={(e) => setNumber2(+e.target.value)}
      ></input>
      <button onClick={handleOnclick}>+</button>
      <button onClick={functionMinus}>-</button>
      <button onClick={functionMultiply}>*</button>
      <button onClick={functionDevide}>/</button>
      <h2>Total: {total || 0}</h2>
    </div>
  );
};
export default Sum;
