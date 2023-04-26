import { useState } from "react";
import Distance from "../Distance/Distance";
import WeeklyGoal from "../Weekly-Step-Goal/WeeklyStepGoal";

// props needed: weekly step goal
//               daily steps

function WeeklyProgress(props) {
  return (
    <div>
      <div>
        <h1>Welcome Back, {props.user}!</h1>
        <WeeklyGoal
          stepRemainderResult={props.stepRemainderResult}
          showWeeklyStepGoal={props.showWeeklyStepGoal}
          weeklyStepGoal={props.weeklyStepGoal}
          handleEnterClick={props.handleEnterClick}
          handleWeeklyEnterChange={props.handleWeeklyEnterChange}
        />

        <p>Check how far away you are from your weekly goal </p>
        <h1> </h1>
        <button
          onClick={() => {
            props.stepRemainderResult();
          }}
        >
          Check here
        </button>
        <h3>{props.stepsRemainder} steps away</h3>
      </div>
      <div></div>
      <div>
        <Distance />
      </div>
    </div>
  );
}

export default WeeklyProgress;
