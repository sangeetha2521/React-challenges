// challeng :When the button is on and it is clicked, it turns off and the text within it changes from ON to OFF and vice versa.
//  Make use of component state for this challenge.

import React, { useState } from "react";

const Toggle = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <button onClick={() => setToggle(!toggle)}>{toggle ? "ON" : "OFF"}</button>
    </>
  );
};
export default Toggle;
