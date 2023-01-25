import React, { useState } from "react";
import AddActivity from "../components/AddActivity";
import { useSelector } from "react-redux";
import Activity from "../components/Activity";

const Workout = () => {
  const [add, setAdd] = useState(false);
  const allActivities = useSelector((state) => state.activities);
  const handleClick = () => {
    setAdd(!add);
  };
  return (
    <div className="workouts-wrapper">
      <h2>My workouts</h2>
      <button onClick={handleClick}>Add activity</button>
      {add && <AddActivity />}
      {allActivities.map((activity) => {
        return (
          <Activity
            key={activity.id}
            id={activity.id}
            name={activity.name}
            duration={activity.duration}
          />
        );
      })}
    </div>
  );
};

export default Workout;
