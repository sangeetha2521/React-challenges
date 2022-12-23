import React from "react";

const ChildComponent = ({ setValue }) => {
  return (
    <>
      <button onClick={() => setValue("From child component!")}>Show Child component</button>
    </>
  );
};
export default ChildComponent;
