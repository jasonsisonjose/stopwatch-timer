import React from "react";
import Activity from "./Activity.js";
import ActivityList from "./ActivityList.js";
class AppBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activityName: "Default", time: 0 };
    this.updateActivity = this.updateActivity.bind(this);
  }

  updateActivity(activityName) {
    this.setState({
      activityName: activityName,
    });
  }

  render() {
    return (
      <div>
        <ActivityList
          updateActivity={this.updateActivity}
          activeActivity={this.state.activityName}
        ></ActivityList>
        <Activity
          activityName={this.state.activityName}
          time={this.state.time}
        ></Activity>
      </div>
    );
  }
}

export default AppBody;
