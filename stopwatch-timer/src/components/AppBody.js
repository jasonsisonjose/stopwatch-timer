import React, { useState } from "react";
import Activity from "./Activity.js";
import ActivityList from "./ActivityList.js";

function AppBody() {
  const [currentActivityName, setActivityName] = useState("Default");
  const [time, setTime] = useState(0);

  function updateActivity(currentActivityName, time) {
    console.log(currentActivityName, time);
    setActivityName(currentActivityName);
    setTime(time);
  }
  // [TODO]: Retrieve activites from IndexDB or DB
  function getActivites() {}
  return (
    <div>
      <ActivityList
        updateActivity={updateActivity}
        currentActivityName={currentActivityName}
      ></ActivityList>
      <Activity
        currentActivityName={currentActivityName}
        time={time}
      ></Activity>
    </div>
  );
}

export default AppBody;
