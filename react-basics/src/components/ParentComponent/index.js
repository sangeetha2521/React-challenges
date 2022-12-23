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
