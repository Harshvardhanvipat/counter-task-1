import React from "react";
import { Dropdown } from "semantic-ui-react";
import "../css/AutomaticDisplayComponent.css";

const secondOptions = [
  { key: 1, text: "1 second", value: 1 },
  { key: 2, text: "2 second", value: 2 },
  { key: 3, text: "3 second", value: 3 },
];

function AutomaticDisplayComponent({
  currentCount,
  setCount,
  currentManualActiveValue,
  toggleFunctionality,
  direction,
  setDirection,
}) {
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
                onClick={
                  direction === "increment"
                    ? () => {
                        return setCount(currentCount + 1);
                      }
                    : () => {
                        return setCount(currentCount - 1);
                      }
                } /* onClick={toggleFunctionality} */
              >
                Pause / Play
              </button>
            </div>
            <div className="column">
              <div>
                <div className="left-arrow">
                  <button onClick={() => setDirection("decrement")}>
                    <i className="angle left icon"></i>
                  </button>
                </div>
              </div>

              {direction}
              <div>
                <div className="right-arrow">
                  <button onClick={() => setDirection("increment")}>
                    <i className="angle right icon"></i>
                  </button>
                </div>
              </div>
            </div>

            <div className="column">
              <div className="seconds-dropdown">
                <Dropdown options={secondOptions} clearable selection />
                {}
              </div>
            </div>
          </div>
        </div>

        {/* {console.log(currentManualActiveValue)} */}
      </div>
    </div>
  );
}

export default AutomaticDisplayComponent;
