import React from "react";
import "./ClockControl.css";
function ClockControl(props) {
  const stopwatchButton = () => {
    if (props.active && props.mode === "stopwatch") {
      return (
        <button className="clock-btn-active" onClick={props.stopStopwatch}>
          {" "}
          Stop{" "}
        </button>
      );
    } else {
      return (
        <button className="clock-btn" onClick={props.startStopwatch}>
          {" "}
          Stopwatch{" "}
        </button>
      );
    }
  };

  const countdownButton = () => {
    if (props.active) {
      return (
        <button className="clock-btn-active" onClick={props.stopCountdown}>
          {" "}
          Stop{" "}
        </button>
      );
    } else {
      if (props.time === 0) {
        return (
          <button disabled className="clock-btn" onClick={props.startCountdown}>
            {" "}
            Countdown{" "}
          </button>
        );
      } else {
        return (
          <button className="clock-btn" onClick={props.startCountdown}>
            {" "}
            Countdown{" "}
          </button>
        );
      }
    }
  };
  // What type of button is it? Start Stop?
  // What mode is it for? Stopwatch or Countdown
  const button =
    props.mode === "stopwatch" ? stopwatchButton() : countdownButton();
  return <div>{button}</div>;
}

export default ClockControl;
