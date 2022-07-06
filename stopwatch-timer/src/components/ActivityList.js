import React from "react";
import Activity from "./Activity";
class ActivityList extends React.Component {
  constructor(props) {
    super(props);
  }
  // Activity: {title, time}
  // Retrieve activites from IndexDB or DB

  // Update REACT DOM, to display new time and activity
  render() {
    let test = (
      <button onClick={() => this.props.updateActivity("helpme")}>
        {" "}
        Default Activity
      </button>
    );
    return <div>{test}</div>;
  }
}

export default ActivityList;
