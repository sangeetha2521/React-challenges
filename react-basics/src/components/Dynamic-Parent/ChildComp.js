//   Challenge: Show entire Child component content inside Parent component. Only add code on Parent Component below

import React, { useState } from "react";
import "../../App.css";

const Child = () => {
  const [showModal, setShowModal] = useState(false);

  const onClick = () => {
    setShowModal(true);
    return <>{showModal && <div>Hey!</div>}</>;
  };
  return (
    <>
      <div>
        <button onClick={onClick}>Show modal</button>
      </div>
    </>
  );
};
export default Child;
