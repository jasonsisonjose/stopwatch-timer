import React, { Component } from "react";
import Clock from "./Clock.js";
import ClockControl from "./ClockControl.js";
import "./Activity.css";
class Activity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: this.props.time,
      stopwatchActive: false,
      countdownActive: false,
    };
    this.startStopwatch = this.startStopwatch.bind(this);
    this.stopStopwatch = this.stopStopwatch.bind(this);
    this.startCountdown = this.startCountdown.bind(this);
    this.stopCountdown = this.stopCountdown.bind(this);
  }
  componentWillUnmount() {
    if (this.timerID) {
      clearInterval(this.timerID);
    }
  }

  startStopwatch() {
    this.setState({ stopwatchActive: true });
    this.timerID = setInterval(() => {
      this.tick("increase");
    }, 1000);
    console.log(this.timerID);
  }

  stopStopwatch() {
    this.setState({ stopwatchActive: false });
    console.log("pause called: ", this.timerID);
    clearInterval(this.timerID);
  }

  startCountdown() {
    this.setState({ countdownActive: true });
    this.timerID = setInterval(() => {
      this.tick("decrease");
    }, 1000);
    console.log(this.timerID);
  }

  stopCountdown() {
    this.setState({ countdownActive: false });
    console.log("pause called: ", this.timerID);
    clearInterval(this.timerID);
  }

  tick(mode) {
    if (mode === "increase") {
      this.setState((state) => ({
        time: state.time + 1,
      }));
    } else {
      if (this.state.time === 0) {
        this.stopCountdown();
        return;
      }
      this.setState((state) => ({
        time: state.time - 1,
      }));
    }
  }

  stopwatchButton() {
    if (this.state.stopwatchActive) {
      return <button onClick={this.stopStopwatch}> Stop </button>;
    } else {
      return <button onClick={this.startStopwatch}> Start </button>;
    }
  }

  render() {
    // const button = this.stopwatchButton();
    return (
      <div>
        <h1> Topic </h1>
        <Clock clock={this.state.time}></Clock>
        <div class="control-btns-container">
          <ClockControl
            startStopwatch={this.startStopwatch}
            stopStopwatch={this.stopStopwatch}
            active={this.state.stopwatchActive}
            mode={"stopwatch"}
          ></ClockControl>
          <div class="control-btns-spacer"></div>
          <ClockControl
            startCountdown={this.startCountdown}
            stopCountdown={this.stopCountdown}
            active={this.state.countdownActive}
            mode={"countdown"}
          ></ClockControl>
        </div>
      </div>
    );
  }
}

export default Activity;
