import "./App.css";
import InputPane from "./components/InputPane";
import OutputPane from "./components/OutputPane";
import StoreProvider from "./Store/StoreProvider";

function App() {
  return (
    <div className="App">
      <StoreProvider>
        <InputPane />
        <OutputPane />
      </StoreProvider>
    </div>
  );
}

export default App;
