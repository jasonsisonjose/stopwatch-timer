import React from "react";
import "./ClockControl.css";
class ClockControl extends React.Component {
  constructor(props) {
    super(props);
    const {
      mode,
      startStopwatch,
      stopStopwatch,
      startCountdown,
      stopCountdown,
      active,
    } = props;
    if (mode === "stopwatch") {
      this.startStopwatch = startStopwatch.bind(this);
      this.stopStopwatch = stopStopwatch.bind(this);
    } else if (mode === "countdown") {
      this.startCountdown = startCountdown.bind(this);
      this.stopCountdown = stopCountdown.bind(this);
    }
  }

  stopwatchButton() {
    if (this.props.active && this.props.mode === "stopwatch") {
      return (
        <button class="clock-btn-active" onClick={this.stopStopwatch}>
          {" "}
          Stop{" "}
        </button>
      );
    } else {
      return (
        <button class="clock-btn" onClick={this.startStopwatch}>
          {" "}
          Stopwatch{" "}
        </button>
      );
    }
  }

  countdownButton() {
    if (this.props.active) {
      return (
        <button class="clock-btn-active" onClick={this.stopCountdown}>
          {" "}
          Stop{" "}
        </button>
      );
    } else {
      return (
        <button class="clock-btn" onClick={this.startCountdown}>
          {" "}
          Countdown{" "}
        </button>
      );
    }
  }
  // What type of button is it? Start Stop?
  // What mode is it for? Stopwatch or Countdown
  render() {
    const button =
      this.props.mode === "stopwatch"
        ? this.stopwatchButton()
        : this.countdownButton();
    return <div>{button}</div>;
  }
}

export default ClockControl;
