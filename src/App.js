import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Calculator } from "./Calculator";
import { Search } from "./Search";
import { Welcome } from "./Welcome";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/calc" element={<Calculator />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
