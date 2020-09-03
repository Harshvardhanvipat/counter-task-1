import React, { useEffect, useState, useRef } from "react";
import { Dropdown } from "semantic-ui-react";
import "../css/AutomaticDisplayComponent.css";
import DisplayNumber from "./DisplayNumberComponent";
import FetchData from "../apis/FetchData";

function AutomaticDisplayComponent(props) {
  return <DisplayButtons />;
}

function DisplayButtons(props) {
  const [direction, setDirection] = useState("Increment");
  const [playPauseMode, setPlayPauseMode] = useState(false);

  console.log(props);
  return (
    <div style={{ marginTop: "100px" }}>
      <div className="ui text container">
        <h2 className="ui header">Header</h2>
        {props.counter}
        <button
          onClick={() => {
            setPlayPauseMode((m) => !m);
          }}
        >
          Play/ Pause
        </button>
        <button onClick={() => setDirection("Increment")}> + </button>
        <button onClick={() => setDirection("Decrement")}> - </button>
        {direction}
        {console.log(playPauseMode)}
      </div>
      <CounterDelaySimulator
        playPauseMode={playPauseMode}
        direction={direction}
      />
    </div>
  );
}

function CounterDelaySimulator(props) {
  const [delay, setDelay] = useState(1000);
  const [counter, setCounter] = useState(0);

  useInterval(() => {
    if (props.playPauseMode) {
      props.direction === "Increment"
        ? setCounter((value) => value + 1)
        : setCounter((value) => value - 1);
    }
  }, delay);

  function handleDelayChange(e) {
    setDelay(Number(e.target.value));
  }

  return (
    <>
      <DisplayNumber currentValue={counter} />
      <div>{counter}</div>
      <button
        onClick={() => {
          setDelay(500);
        }}
      >
        1/2 second
      </button>
      <button
        onClick={() => {
          setDelay(1000);
        }}
      >
        1 second
      </button>
      <button
        onClick={() => {
          setDelay(2000);
        }}
      >
        2 second
      </button>
      <button
        onClick={() => {
          setDelay(4000);
        }}
      >
        4 second
      </button>
      <input value={delay} onChange={handleDelayChange}></input>

      <div>{console.log(props.playPauseMode)}</div>

      <ManualDisplayComponent
        count={counter}
        playPauseMode={props.playPauseMode}
        setCount={setCounter}
      />

      <FetchData displayNumberDetails={counter} />
    </>
  );
}

function ManualDisplayComponent(props) {
  let classButton = "";
  return (
    <>
      <div>test Div manual control {props.count}</div>
      <button
        className={props.playPauseMode ? "disabled" : ""}
        onClick={() => {
          props.setCount((counter) => counter + 1);
        }}
      >
        +
      </button>
      <button
        className={props.playPauseMode ? "disabled" : ""}
        onClick={() => props.setCount((counter) => counter + 1)}
      >
        -
      </button>
    </>
  );
}

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
export default AutomaticDisplayComponent;
