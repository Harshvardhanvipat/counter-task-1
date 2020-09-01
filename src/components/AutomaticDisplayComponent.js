import React, { useEffect, useState } from "react";
import { Dropdown } from "semantic-ui-react";
import "../css/AutomaticDisplayComponent.css";

const secondOptions = [
  { key: 1, text: "1 second", value: 1 },
  { key: 2, text: "2 second", value: 2 },
  { key: 3, text: "3 second", value: 3 },
];

function incrementTheValue(value = 1000, currentCount, setCount) {
  setTimeout(() => {
    return setCount(currentCount + 1);
  }, value);
}

function decrementTheValue(value = 1000, currentCount, setCount) {
  setTimeout(() => {
    return setCount(currentCount - 1);
  }, value);
}

function checkPlayPauseStatus() {}

function AutomaticDisplayComponent({
  currentCount,
  setCount,
  currentManualActiveValue,
  togglefunctionality,
  direction,
  setDirection,
}) {
  const [play, setPlay] = useState("pause");

  useEffect(() => {
    let counter = currentCount;
    const increaseCount = setInterval(() => {
      // console.log(counter++);
      setCount((counter) => counter);
    }, 1000);

    const timer = setInterval(() => {
      // console.log("This will run after 1 second!");
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container ui">
      <div>
        <h2 className="ui center aligned icon header automatic-controls">
          <i className="circular users icon"></i>
          Automatic
        </h2>
      </div>

      <div>
        <div className="ui divided three column grid">
          <div className="row">
            <div className="column">
              <button
                className="ui primary button"
                onClick={
                  direction === "increment"
                    ? () => {
                        return incrementTheValue(1000, currentCount, setCount);
                      }
                    : () => {
                        return decrementTheValue(1000, currentCount, setCount);
                      }
                } /* onClick={toggleFunctionality} */
              >
                Pause / Play
              </button>
            </div>
            <div className="column">
              <div>
                <div className="left-arrow">
                  <button
                    className="ui olive inverted button"
                    onClick={() => setDirection("decrement")}
                  >
                    <i className="angle left icon"></i>
                  </button>
                </div>
              </div>

              {direction}
              <div>
                <div className="right-arrow">
                  <button
                    className="ui olive inverted button"
                    onClick={() => setDirection("increment")}
                  >
                    <i className="angle right icon"></i>
                  </button>
                </div>
              </div>
            </div>

            <div className="column">
              <div className="seconds-dropdown">
                <Dropdown
                  id="test"
                  options={secondOptions}
                  clearable
                  selection
                />
                {}
              </div>
            </div>
          </div>
        </div>

        {console.log(currentManualActiveValue)}
      </div>
    </div>
  );
}

export default AutomaticDisplayComponent;
