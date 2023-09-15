import BarcodeGen from "./components/BarcodeGen";
import DMBarcodeGen from "./components/DMBarcodeGen";
import "./style/App.css";
import EditorSampleDM from "./component_editor_sample/EditorSampleDM";
import TestComponent from "./components/TestComponent";

function App() {
  return (
    <div className="App">
      {/* <BarcodeGen /> */}
      <TestComponent />
      {/* <DMBarcodeGen /> */}
      <EditorSampleDM />
    </div>
  );
}

export default App;
