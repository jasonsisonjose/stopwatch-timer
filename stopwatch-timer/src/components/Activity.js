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
    if (this.timerID) {
      clearInterval(this.timerID);
    }
  }

  useEffect() {
    console.log("props:", this.props.time);
    this.setStartTime();
  }

  startStopwatch() {
    this.setState({ stopwatchActive: true });
    this.setState({
      time: this.props.time,
    });
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
    this.setState({
      time: this.props.time,
    });
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
      console.log("stopwatch increase timer: ", this.state.time);
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

  setStartTime() {
    // Default timer or when an activity button is pressed
    this.setState({
      time: this.props.time,
    });
  }

  render() {
    return (
      <div>
        <h1> {this.props.activityName} </h1>
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
          ></ClockControl>
        </div>
      </div>
    );
  }
}

export default Activity;
