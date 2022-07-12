import React, { useEffect, useState, useRef } from "react";
import Clock from "./Clock.js";
import ClockControl from "./ClockControl.js";
import "./Activity.css";
function Activity(props) {
  const [time, setTime] = useState(props.time);
  const [stopwatchActive, setStopwatch] = useState(false);
  const [countdownActive, setCountdown] = useState(false);
  let stopwatchID = useRef(null);
  let countdownID = useRef(null);
  // Only updates when the props time change (when different activity is pressed)
  useEffect(() => {
    setTime(props.time);
  }, [props.time]);

  // Fires every instance where time is updated
  useEffect(() => {
    console.log("updated time state: ", time);
    if (time === 0 && countdownActive) {
      console.log("time is 0, shutting down countdown");
      stopCountdown();
      return;
    }
  }, [time, countdownActive]);

  useEffect(() => {}, [stopwatchActive]);

  const startStopwatch = () => {
    if (countdownID.current) {
      console.log("countdown exists, CLOSING instance");
      stopCountdown();
    }
    setStopwatch((stopwatchActive) => (stopwatchActive = true));
    stopwatchID.current = setInterval(() => {
      tick("increase");
    }, 1000);
    console.log(stopwatchID);
  };

  const stopStopwatch = () => {
    setStopwatch((stopwatchActive) => (stopwatchActive = false));
    console.log("pause called: ", stopwatchID);
    clearInterval(stopwatchID.current);
  };

  const startCountdown = () => {
    if (stopwatchID.current) {
      console.log("stopwatch exists, CLOSING instance");
      stopStopwatch();
    }
    setCountdown((countdownActive) => (countdownActive = true));
    countdownID.current = setInterval(() => {
      tick("decrease");
    }, 1000);
    console.log("countdown timer id: ", countdownID.current);
  };

  const stopCountdown = () => {
    setCountdown((countdownActive) => (countdownActive = false));
    console.log("pause called: ", countdownID);
    clearInterval(countdownID.current);
  };

  const tick = (mode) => {
    if (mode === "increase") {
      setTime((time) => time + 1);
    } else {
      setTime((time) => time - 1);
    }
  };

  return (
    <div>
      <h1> {props.currentActivityName} </h1>
      <Clock clock={time}></Clock>
      <div className="control-btns-container">
        <ClockControl
          startStopwatch={startStopwatch}
          stopStopwatch={stopStopwatch}
          active={stopwatchActive}
          mode={"stopwatch"}
        ></ClockControl>
        <div className="control-btns-spacer"></div>
        <ClockControl
          startCountdown={startCountdown}
          stopCountdown={stopCountdown}
          active={countdownActive}
          mode={"countdown"}
          time={time}
        ></ClockControl>
      </div>
    </div>
  );
}

export default Activity;
