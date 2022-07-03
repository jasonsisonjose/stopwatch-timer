import React from "react";

// Responsible for Updating Clock: Decrementing or Incrementing every second
// State would be how much time is saved
// [TODO]: How to save state persistently?
class Clock extends React.Component {
  formatClock(clock) {
    // Two formats - 00:00 hours:minutes and minutes:seconds
    // const seconds = clock;

    const minutes = Math.trunc(clock / 60);
    const seconds = clock;
    let timeString = "";
    if (minutes > 0) {
      timeString = `${this.formatDigits(minutes)}:${this.formatDigits(
        seconds % 60
      )}`;
    } else {
      timeString = `00:${this.formatDigits(seconds)}`;
    }
    return timeString;
  }

  formatDigits(digits) {
    if (digits === undefined) {
      console.log("No valid digits passed");
      return;
    }
    // If double digits or single-digit
    return digits > 9 ? `${digits}` : `0${digits}`;
  }

  render() {
    return (
      <div>
        <h2> {this.formatClock(this.props.clock)}</h2>
      </div>
    );
  }
}

export default Clock;
