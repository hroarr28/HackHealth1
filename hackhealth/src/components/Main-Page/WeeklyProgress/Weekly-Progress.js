import { useState } from "react";
import Distance from "../Distance/Distance";

// props needed: weekly step goal
//               daily steps

function WeeklyProgress() {
  return (
    <div>
      <div>
        <h1>Welcome Back</h1>
        <p>You are ${} away from your weekly goal</p>
      </div>
      <div>
        <WeeklyProgress />
      </div>
      <div>
        <Distance />
      </div>
    </div>
  );
}

export default WeeklyProgress;
