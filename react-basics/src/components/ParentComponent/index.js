// Challenge: Parent text (I need to be updated from my child) should be updated when Child button below is clicked. Feel free to use any string to update the parent's current string.

import react, { useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const [value, setValue] = useState("Hai iam parent component");

  return (
    <>
      <h2>{value}</h2>
      <ChildComponent setValue={setValue} />
    </>
  );
};
export default ParentComponent;
