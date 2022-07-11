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

  componentDidUpdate(prevProps) {
    if (this.props.time !== prevProps.time) {
      this.setStartTime();
    }
  }
  componentWillUnmount() {
    if (this.stopwatchID) {
      clearInterval(this.stopwatchID);
    }
    if (this.countdownID) {
      clearInterval(this.countdownID);
    }
  }

  startStopwatch() {
    if (this.state.countdownActive) {
      this.stopCountdown();
    }
    this.setState({ stopwatchActive: true });
    this.stopwatchID = setInterval(() => {
      this.tick("increase");
    }, 1000);
    console.log(this.stopwatchID);
  }

  stopStopwatch() {
    this.setState({ stopwatchActive: false });
    console.log("pause called: ", this.stopwatchID);
    clearInterval(this.stopwatchID);
  }

  startCountdown() {
    if (this.state.stopwatchActive) {
      this.stopStopwatch();
    }
    this.setState({ countdownActive: true });
    this.countdownID = setInterval(() => {
      this.tick("decrease");
    }, 1000);
    console.log(this.countdownID);
  }

  stopCountdown() {
    this.setState({ countdownActive: false });
    console.log("pause called: ", this.countdownID);
    clearInterval(this.countdownID);
  }

  tick(mode) {
    if (mode === "increase") {
      console.log("stopwatch increase timer: ", this.state.time);
      this.setState((state) => ({
        time: state.time + 1,
      }));
    } else {
      console.log("countdown brh");
      if (this.state.time === 0) {
        this.stopCountdown();
        return;
      }
      this.setState((state) => ({
        time: state.time - 1,
      }));
    }
  }

  setStartTime() {
    // Default timer or when an activity button is pressed
    this.setState({
      time: this.props.time,
    });
  }

  render() {
    return (
      <div>
        <h1> {this.props.currentActivityName} </h1>
        <Clock clock={this.state.time}></Clock>
        <div className="control-btns-container">
          <ClockControl
            startStopwatch={this.startStopwatch}
            stopStopwatch={this.stopStopwatch}
            active={this.state.stopwatchActive}
            mode={"stopwatch"}
          ></ClockControl>
          <div className="control-btns-spacer"></div>
          <ClockControl
            startCountdown={this.startCountdown}
            stopCountdown={this.stopCountdown}
            active={this.state.countdownActive}
            mode={"countdown"}
            time={this.state.time}
          ></ClockControl>
        </div>
      </div>
    );
  }
}

export default Activity;
