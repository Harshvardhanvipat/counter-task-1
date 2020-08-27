import React from "react";
import { Dropdown } from "semantic-ui-react";
import "../css/AutomaticDisplayComponent.css";

const secondOptions = [
  { key: 1, text: "1 second", value: 1 },
  { key: 2, text: "2 second", value: 2 },
  { key: 3, text: "3 second", value: 3 },
];

function AutomaticDisplayComponent({
  currentManualActiveValue,
  toggleFunctionality,
  direction,
  toggleDirection,
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
        <button onClick={toggleFunctionality}>Pause / Play</button>
        {/* {console.log(currentManualActiveValue)} */}
      </div>

      <div className="left-arrow">
        <button onClick={toggleDirection}>
          <i className="angle left icon"></i>
        </button>
      </div>
      {direction}
      <div className="right-arrow">
        <button onClick={toggleDirection}>
          <i className="angle right icon"></i>
        </button>
      </div>

      <div className="seconds-dropdown">
        <Dropdown options={secondOptions} clearable selection />
      </div>
    </div>
  );
}

export default AutomaticDisplayComponent;
