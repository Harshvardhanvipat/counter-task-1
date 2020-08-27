import React from "react";
// import DisplayNumber from "../src/components/DisplayNumberComponent";
import IncrementDecrementComponent from "../src/components/IncrementDecrementComponent";
// import { useState } from "react";
//https:elated-fermi-52a102.netlify.app/

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      manualActive: true,
    };
  }

  increment() {
    setState({ count: count + 1 });
  }

  render() {
    return (
      <IncrementDecrementComponent
        currentValue={this.state.count}
        manualActive={this.state.manualActive}
        incrementHandler={this.increment}
      />
    );
  }
}

export default App;
