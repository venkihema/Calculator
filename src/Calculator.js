import { useState } from "react";
import "./App.css";

export function Calculator() {
  const [result, setResult] = useState("");

  const onclickHandler = (e) => {
    setResult((result) => result + e.target.name);
  };

  const resultHandler = () => {
    const r = eval(result);
    setResult(r);
  };

  const clearHandler = () => {
    setResult("");
  };

  const sliceHandler = () => {
    setResult(result.slice(0, -1));
  };
  return (
    <div className="calculator">
      <div className="displayResult">
        <input
          type="text"
          value={result}
          onChange={(e) => {
            return setResult(e.target.value);
          }}
        />
      </div>
      <div className="button-layout">
        <div className="firstrow">
          <button className="btn1" onClick={clearHandler}>
            Clear
          </button>

          <button className="btn2" onClick={sliceHandler}>
            C
          </button>

          <button className="btn3" onClick={onclickHandler} name="+">
            +
          </button>
        </div>
        <div className="middlerow">
          <button onClick={onclickHandler} name="1">
            1
          </button>
          <button onClick={onclickHandler} name="2">
            2
          </button>
          <button onClick={onclickHandler} name="3">
            3
          </button>
          <button onClick={onclickHandler} name="-">
            -
          </button>
        </div>
        <div className="middlerow">
          <button onClick={onclickHandler} name="4">
            4
          </button>
          <button onClick={onclickHandler} name="5">
            5
          </button>
          <button onClick={onclickHandler} name="6">
            6
          </button>
          <button onClick={onclickHandler} name="*">
            *
          </button>
        </div>
        <div className="middlerow">
          <button onClick={onclickHandler} name="7">
            7
          </button>
          <button onClick={onclickHandler} name="8">
            8
          </button>
          <button onClick={onclickHandler} name="9">
            9
          </button>
          <button onClick={onclickHandler} name="/">
            /
          </button>
        </div>

        <div className="lastrow">
          <button onClick={onclickHandler} name="0">
            0
          </button>
          <button className="equalbtn" onClick={resultHandler}>
            =
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
}
