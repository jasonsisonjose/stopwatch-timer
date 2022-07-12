import React, { useEffect, useState } from "react";
import Clock from "./Clock.js";
import ClockControl from "./ClockControl.js";
import "./Activity.css";
function Activity(props) {
  const [time, setTime] = useState(props.time);
  const [stopwatchActive, setStopwatch] = useState(false);
  const [countdownActive, setCountdown] = useState(false);

  // unsure of this lifecycle
  let stopwatchID, countdownID;

  useEffect(() => {
    // Only update on activity change
    setTime(props.time);

    // return function cleanup() {
    //   if (stopwatchID) {
    //     clearInterval(stopwatchID);
    //   }
    //   if (countdownID) {
    //     clearInterval(countdownID);
    //   }
    // };
  }, [props.time]);

  useEffect(() => {}, [time]);

  const startStopwatch = () => {
    if (countdownActive) {
      stopCountdown();
    }
    setStopwatch(true);
    stopwatchID = setInterval(() => {
      tick("increase");
    }, 1000);
    console.log(stopwatchID);
  };

  const stopStopwatch = () => {
    setStopwatch((stopwatchActive) => (stopwatchActive = false));
    console.log("pause called: ", stopwatchID);
    clearInterval(stopwatchID);
  };

  const startCountdown = () => {
    if (stopwatchActive) {
      stopStopwatch();
    }
    setCountdown((countdownActive) => (countdownActive = false));
    countdownID = setInterval(() => {
      tick("decrease");
    }, 1000);
    console.log(countdownID);
  };

  const stopCountdown = () => {
    setCountdown((countdownActive) => (countdownActive = false));
    console.log("pause called: ", countdownID);
    clearInterval(countdownID);
  };

  const tick = (mode) => {
    console.log("current time: ", time);
    if (mode === "increase") {
      setTime((time) => time + 1);
      console.log("stopwatch increase timer: ", time);
    } else {
      console.log("countdown brh");
      if (time === 0) {
        console.log("time is 0, shutting down countdown");
        stopCountdown();
        return;
      }
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
