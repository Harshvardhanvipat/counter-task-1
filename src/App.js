import React from "react";
import DisplayNumber from "../src/components/DisplayNumberComponent";
// import { useState } from "react";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    const ICREMENT_SYMBOL = "+";
    const DECREMENT_SYMBOL = "-";

    return (
      <div>
        <div className="displayNumberDivHolder">
          <DisplayNumber currentValue={this.state.count}></DisplayNumber>
        </div>
        <div className="ui grid equal  increment-decrement-button-holder-div">
          <h2 className="ui center aligned icon header">
            <i className="circular users icon"></i>
            Friends
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
              <button
                onClick={() => this.setState({ count: this.state.count - 1 })}
                className="ui button"
              >
                {DECREMENT_SYMBOL}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
