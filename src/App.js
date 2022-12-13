import { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState("");

  const onclickHandler = (e) => {
    setResult(result.concat(e.target.name));
  };
  // console.log(result);
  const resultHandler = () => {
    setResult(Function(result));
  };
  const clearHandler = () => {
    setResult("");
  };
  const sliceHandler = () => {
    setResult(result.slice(0, -1));
  };

  return (
    <div className="App">
      <div className="displayResult">
        <input type="text" value={result} />
      </div>
      <div>
        <button onClick={onclickHandler} name="1">
          1
        </button>
        <button onClick={onclickHandler} name="2">
          2
        </button>
        <button onClick={onclickHandler} name="3">
          3
        </button>
        <button onClick={onclickHandler} name="4">
          4
        </button>
        <button onClick={onclickHandler} name="5">
          5
        </button>
        <button onClick={onclickHandler} name="+">
          +
        </button>
        <button onClick={resultHandler}>=</button>
      </div>
      <button onClick={clearHandler}>Clear</button>
      <button onClick={sliceHandler}>C</button>
      <br />
    </div>
  );
}

export default App;
