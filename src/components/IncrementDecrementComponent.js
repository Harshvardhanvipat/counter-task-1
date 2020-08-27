import React from "react";
import DisplayNumber from "../components/DisplayNumberComponent";

function IncrementDecrementComponent(props) {
  const ICREMENT_SYMBOL = "+";
  const DECREMENT_SYMBOL = "-";

  if (props.manualActive === true) {
    return (
      <div>
        <div className="displayNumberDivHolder">
          <DisplayNumber currentValue={props.currentValue}></DisplayNumber>
        </div>
        <div className="ui grid equal  increment-decrement-button-holder-div">
          <h2 className="ui center aligned icon header">
            <i className="sign language icon"></i>
            Manual
          </h2>

          <div className="equal width row">
            <div className="increment column">
              <button
                onClick={() => this.setState({ count: this.state.count + 1 })}
                className="ui secondary button"
              >
                {ICREMENT_SYMBOL}
              </button>
            </div>
            <div className="decrement column">
              <button onClick={props.incrementHandler} className="ui button">
                {DECREMENT_SYMBOL}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>The Manual functionality is disabled</div>;
  }
}

export default IncrementDecrementComponent;
