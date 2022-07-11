import React from "react";
import Activity from "./Activity.js";
import ActivityList from "./ActivityList.js";
class AppBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentActivityName: "Default", time: 0 };
    this.updateActivity = this.updateActivity.bind(this);
  }

  updateActivity(currentActivityName, time) {
    this.setState({
      currentActivityName: currentActivityName,
    });
    console.log(this.state.currentActivityName);
    this.setState({
      time: time,
    });
    console.log(this.state.time);
  }

  render() {
    return (
      <div>
        <ActivityList
          updateActivity={this.updateActivity}
          currentActivityName={this.state.currentActivityName}
        ></ActivityList>
        <Activity
          currentActivityName={this.state.currentActivityName}
          time={this.state.time}
        ></Activity>
      </div>
    );
  }
}

export default AppBody;
