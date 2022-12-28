import "./App.css";
import Jsx from "./components/jsx";
import Users from "./components/Array";
import HideContent from "./components/Hidecontent";
import TwowayBinding from "./components/TwoWayBinding";
import Disable from "./components/DisableButton";
import ParantComponent from "./components/ParentComponent";
import Parent from "./components/Dynamic-Parent";
import Sum from "./components/Sum";
import Counter from "./components/Counter";
import Toggle from "./components/ToggleButton";
import { useState } from "react";

const navLinks = [
  { url: "/about-us", name: "JSX" },
  { url: "/projects", name: "Array of user" },
  { url: "/services", name: "show and hide content" },
  { url: "/", name: "Two way binding" },
  { url: "/", name: "Button disable" },
  { url: "/", name: "Parent component" },
  { url: "/", name: "Calculator" },
  { url: "/", name: "Counter" },
  { url: "/", name: "Toggle" },
];

function App() {
  const [open, setOpen] = useState(false);
  const [style, setStyle] = useState("active");
  const handleOnclick = () => {
    switch (open) {
      case true:
        {
          setOpen(true);
          setStyle("active");
        }
        break;
      case false:
        {
          setOpen(true);
          setStyle("inActive");
        }
        break;
    }
  };
  return (
    <>
      <div className="App"></div>
      <div className="main">
        <div className={style}>
          <ul>
            {navLinks.map(({ url, name }) => (
              <li>
                <a href={url}>{name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="contents">
        <Jsx />
        <Users />
        <HideContent />
        <TwowayBinding />
        <Disable />
        <ParantComponent />
        <Parent />
        <Sum />
        <Counter />
        <Toggle />
      </div>
    </>
  );
}

export default App;
