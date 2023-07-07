import { useState } from "react";
import Distance from "../Distance/Distance";
import WeeklyGoal from "../Weekly-Step-Goal/WeeklyStepGoal";
import "./Weekly-Progress.css"

// props needed: weekly step goal
//               daily steps

function WeeklyProgress(props) {
  return (
    <div className="weekly-container">
      <div className="welcome-header">
      <h1>Welcome Back, {props.user}!</h1>
      <img src="https://i.ibb.co/LCrMT1R/Untitled-800-800px-300-300px.png" alt="avatar-img" className=""/>
      </div>
      <WeeklyGoal
          setWeeklyStepGoal={props.setWeeklyStepGoal}
          stepRemainderResult={props.stepRemainderResult}
          showWeeklyStepGoal={props.showWeeklyStepGoal}
          weeklyStepGoal={props.weeklyStepGoal}
          handleEnterClick={props.handleEnterClick}
          handleWeeklyEnterChange={props.handleWeeklyEnterChange}
        />
        <div className="weekly-reminder">
        <h2>Check how far away you are from your weekly goal! </h2>
        <button
          onClick={() => {
            props.stepRemainderResult();
          }}
        >
          Check here
        </button>
        <h3><span className="span-reminder">{props.stepsRemainder}</span> steps away</h3>
        </div>
      <div>
        <Distance totalSteps={props.totalSteps}/>
      </div>
    </div>
  );
}

export default WeeklyProgress;
