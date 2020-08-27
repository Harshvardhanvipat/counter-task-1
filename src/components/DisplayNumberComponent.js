import React from "react";
import ReactDOM from "react-dom";
import "../css/DisplayNumberComponent.css";

function DisplayNumber(props) {
  return (
    <div className="ui text container display-number">{props.currentValue}</div>
  );
}

export default DisplayNumber;
