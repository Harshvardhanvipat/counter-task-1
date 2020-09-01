import React from "react";
import { useState } from "react";
import DisplayNumber from "../src/components/DisplayNumberComponent";
import AutomaticDisplayComponent from "../src/components/AutomaticDisplayComponent";
import FetchData from "../src/apis/FetchData";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [manualActive, changedManualActive] = useState(true);
  const [direction, setDirection] = useState("increment");

  const ICREMENT_SYMBOL = "+";
  const DECREMENT_SYMBOL = "-";

  function handleAutomaticFunctionality() {}

  return (
    <div>
      <div className="displayNumberDivHolder">
        <DisplayNumber currentValue={count}></DisplayNumber>
      </div>
      <div className="ui grid equal  increment-decrement-button-holder-div">
        <h2 className="ui center aligned icon header">
          <i className="sign language icon"></i>
          Manual
        </h2>

        <div className="equal width row">
          <div className="increment column">
            <button
              onClick={() => setCount((count) => count + 1)}
              className="ui secondary button"
            >
              {ICREMENT_SYMBOL}
            </button>
          </div>
          <div className="decrement column">
            <button
              onClick={() =>
                manualActive && count === 0
                  ? undefined
                  : setCount((count) => count - 1)
              }
              className="ui secondary button"
            >
              {DECREMENT_SYMBOL}
            </button>
          </div>
        </div>
      </div>

      <AutomaticDisplayComponent
        currentCount={count}
        setCount={setCount}
        currentManualActiveValue={manualActive}
        toggleFunctionality={() => {
          changedManualActive((m) => !m);
        }}
        direction={direction}
        setDirection={setDirection}
      />
      <FetchData displayNumberDetails={count} />
      {direction}
    </div>
  );
}

export default App;
