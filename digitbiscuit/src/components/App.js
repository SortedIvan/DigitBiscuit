import "./styles.css";
import Digitcard from "./digitcard/Digitcard";
function App() {
  return (
    <div className="App">
      <Digitcard text="Drag" bgColor="#FF9300" />
      <Digitcard text="Drop" bgColor="#00A2FF" />
    </div>
  );
}

export default App;
