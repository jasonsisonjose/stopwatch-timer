import React, { useEffect, useState } from "react";
import "./ActivityList.css";
import { v4 as uuidv4 } from "uuid";

function ActivityList(props) {
  // We want to read everytime it gets updated

  // Just pass in the key, the on the onClick fn: we call get item and then set current activity and time
  // each activity would manage its own persistent state bc of the key provided by the parent (activity list)

  const activityBtns = Object.keys(props.activityList).map((key) => {
    return (
      <button
        id={key}
        className={
          props.activityList[key].title === props.currentActivityName
            ? "activity-list-btn active"
            : "activity-list-btn"
        }
        onClick={() => props.setCurrentActivity(key)}
      >
        {props.activityList[key]["title"]}
      </button>
    );
  });

  // Activity: {title, time}
  // Update REACT DOM, to display new time and activity
  return (
    <div>
      <div>{activityBtns}</div>
      {/* {for (const key in activityList) {
      //           <button
      //           className={
      //             activityList[key].title === props.currentActivityName
      //               ? "activity-list-btn active"
      //               : "activity-list-btn"
      //           }
      //           key={activityList[key].title}
      //           onClick={() => props.updateActivity(activityList[key].title, activityList[key].time)}
      //         >
      //           {activityList[key].title}
      //         </button>
      //         }
      //       } */}
    </div>
  );
}

export default ActivityList;
