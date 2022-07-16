import React, { useEffect, useState } from "react";
import Activity from "./Activity.js";
import ActivityList from "./ActivityList.js";

function AppBody() {
  const [currentActivityName, setActivityName] = useState("Default");
  const [currentActivityKey, setActivityKey] = useState(0);
  const [time, setTime] = useState(0);
  const [activityList, setActivityList] = useState(() => {
    const items = { ...localStorage };
    console.log(items);
    for (const key in items) {
      console.log(items[key]);
      items[key] = JSON.parse(items[key]);
    }
    console.log("parsed: ", items);
    return items;
  });

  const setCurrentActivity = (key) => {
    let activity = localStorage.getItem(key);
    activity = JSON.parse(activity);
    setActivityName(activity.title);
    setTime(activity.time);
    setActivityKey(key);
  };

  // [TODO]: Retrieve activites from IndexDB or DB
  // We just need keys
  const getActivites = () => {
    const items = { ...localStorage };
    console.log(items);
    for (const key in items) {
      console.log(items[key]);
      items[key] = JSON.parse(items[key]);
    }
    console.log("parsed: ", items);
    return items;
  };

  const updateStorageActivity = (key, time) => {
    console.log("received from activity: ", key, time);
    // Send update to local storage
    let item = localStorage.getItem(key);
    item = JSON.parse(item);
    if (!item) {
      console.error("Couldnt parse item. Invalid item bro");
      return;
    }
    item.time = time;
    localStorage.setItem(key, JSON.stringify(item));
  };

  return (
    <div>
      <ActivityList
        setCurrentActivity={setCurrentActivity}
        currentActivityName={currentActivityName}
        activityList={activityList}
      ></ActivityList>
      <Activity
        updateStorageActivity={updateStorageActivity}
        currentActivityName={currentActivityName}
        currentActivityKey={currentActivityKey}
        time={time}
      ></Activity>
    </div>
  );
}

export default AppBody;
