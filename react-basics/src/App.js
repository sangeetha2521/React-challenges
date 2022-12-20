import './App.css';
import Jsx from "./components/jsx";
import Users from './components/Array';
import HideContent from './components/Hidecontent';
import TwowayBinding from './components/TwoWayBinding';
import Disable from './components/DisableButton';

function App() {
  return (
    <div className="App">
      <Jsx />
      <Users />
      <HideContent />
     <TwowayBinding/>
     <Disable/>
    </div>
  );
}

export default App;
