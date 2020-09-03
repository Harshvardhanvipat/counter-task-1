import React from "react";
import AutomaticDisplayComponent from "../src/components/AutomaticDisplayComponent";

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
