import React from "react";
import Activity from "./Activity";
class ActivityList extends React.Component {
  // Activity: {title, time}
  // Retrieve activites from IndexDB or DB
  render() {
    return (
      <div>
        <button> Default Activity </button>
        <button> Add Activity</button>
      </div>
    );
  }
}

export default ActivityList;
