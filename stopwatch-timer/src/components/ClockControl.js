import React from "react";

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
      return <button onClick={this.stopStopwatch}> Stop </button>;
    } else {
      return <button onClick={this.startStopwatch}> Start </button>;
    }
  }

  countdownButton() {
    if (this.props.active) {
      return <button onClick={this.stopCountdown}> Stop </button>;
    } else {
      return <button onClick={this.startCountdown}> Start </button>;
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
