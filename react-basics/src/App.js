import "./App.css";
import Jsx from "./components/jsx";
import Users from "./components/Array";
import HideContent from "./components/Hidecontent";
import TwowayBinding from "./components/TwoWayBinding";
import Disable from "./components/DisableButton";
import ParantComponent from "./components/ParentComponent";
import Parent from "./components/Dynamic-Parent";

function App() {
  return (
    <div className="App">
      <Jsx />
      <Users />
      <HideContent />
      <TwowayBinding />
      <Disable />
      <ParantComponent />
      <Parent />
    </div>
  );
}

export default App;
