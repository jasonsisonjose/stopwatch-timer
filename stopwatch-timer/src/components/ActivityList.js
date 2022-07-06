import React from "react";
import Activity from "./Activity";
class ActivityList extends React.Component {
  constructor(props) {
    super(props);
    this.activityList = [
      { title: "bro", time: 10 },
      { title: "help me", time: 50 },
    ];
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
    return (
      <div>
        {this.activityList.map((activity) => (
          <button
            key={activity.title}
            onClick={() =>
              this.props.updateActivity(activity.title, activity.time)
            }
          >
            {" "}
            {activity.title}
          </button>
        ))}
      </div>
    );
  }
}

export default ActivityList;
