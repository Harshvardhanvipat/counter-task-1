import React from "react";
import DisplayNumber from "../src/components/DisplayNumberComponent";
import IncrementComponent from "../src/components/IncrementComponent";
import DecrementComponent from "../src/components/DecrementComponent";
import { useState } from "react";

import "./App.css";

function App() {
  const [value, setValue] = useState(0);

  return (
    <div className="App">
      <div>
        <DisplayNumber currentValue={value}></DisplayNumber>
        <IncrementComponent></IncrementComponent>
        <DecrementComponent></DecrementComponent>
      </div>
    </div>
  );
}

export default App;
