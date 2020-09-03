import React from "react";
import { useState } from "react";
import DisplayNumber from "../src/components/DisplayNumberComponent";
import AutomaticDisplayComponent from "../src/components/AutomaticDisplayComponent";
// import FormAutomaticRender from "../src/components/FormAutomaticRender";
import FetchData from "../src/apis/FetchData";

import "./App.css";

function App() {
  // const [direction, setDirection] = useState("increment");

  const ICREMENT_SYMBOL = "+";
  const DECREMENT_SYMBOL = "-";
  let classButton = "ui secondary button";

  return (
    <div>
      <AutomaticDisplayComponent />
    </div>
  );
}

export default App;
