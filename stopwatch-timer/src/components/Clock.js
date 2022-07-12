import React from "react";
import "./Clock.css";
// Responsible for Updating Clock: Decrementing or Incrementing every second
// State would be how much time is saved
// [TODO]: How to save state persistently?
function Clock(props) {
  const formatClock = (clock) => {
    // Two formats - 00:00 hours:minutes and minutes:seconds
    // const seconds = clock;
    const minutes = Math.trunc(clock / 60);
    const seconds = clock;
    let timeString = "";
    if (minutes > 0) {
      timeString = `${formatDigits(minutes)}:${formatDigits(seconds % 60)}`;
    } else {
      timeString = `00:${formatDigits(seconds)}`;
    }
    return timeString;
  };

  const formatDigits = (digits) => {
    if (digits === undefined) {
      console.log("No valid digits passed");
      return;
    }
    // If double digits or single-digit
    return digits > 9 ? `${digits}` : `0${digits}`;
  };

  return (
    <div>
      <span className="clock-digits"> {formatClock(props.clock)}</span>
    </div>
  );
}

export default Clock;
