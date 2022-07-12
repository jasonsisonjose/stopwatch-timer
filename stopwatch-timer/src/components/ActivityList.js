import React from "react";
import "./ActivityList.css";
function ActivityList(props) {
  // This would be passed down in props
  const activityList = [
    { title: "Default", time: 0 },
    { title: "bro", time: 10 },
    { title: "help me", time: 50 },
  ];
  // Activity: {title, time}
  // Update REACT DOM, to display new time and activity
  return (
    <div>
      {activityList.map((activity) => (
        <button
          className={
            activity.title === props.currentActivityName
              ? "activity-list-btn active"
              : "activity-list-btn"
          }
          key={activity.title}
          onClick={() => props.updateActivity(activity.title, activity.time)}
        >
          {" "}
          {activity.title}
        </button>
      ))}
    </div>
  );
}

export default ActivityList;
