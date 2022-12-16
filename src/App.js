import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Calculator } from "./Calculator";
import { Search } from "./Search";

function App() {
  return (
    <div className="App">
      <Calculator />
      {/* <Search /> */}
    </div>
  );
}

export default App;
